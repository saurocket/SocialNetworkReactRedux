import {updateObjectInArray} from "../utils/objectHelpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

import {usersAPI} from "../API/users-api";
import {APIResponseType, ResultCodesEnum} from "../API/api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    follwingInProgress: [] as Array<number>, //Array Of users ID,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                follwingInProgress: action.follwingInProgress ? [...state.follwingInProgress, action.userId]
                    : state.follwingInProgress.filter(id => id != action.userId)
            }
        }
        case "SET_USER_FILTER":{
            return {
                ...state, filter: action.payload
            }
        }
        default:
            return state;
    }
}
export default usersReducer;
export const actions = {
    followSuccess: (userId: number) => {
        return ({type: 'FOLLOW', userId} as const)
    },
    unFollowSuccess: (userId: number) => {
        return ({type: 'UNFOLLOW', userId} as const)
    },
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUserCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowingProgress: (follwingInProgress: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        follwingInProgress,
        userId
    } as const),
    setFilter: (filter: FilterType)=> ({type: 'SET_USER_FILTER', payload:filter} as const)
}
export const getUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
    return (
        async (dispatch, getState) => {
            dispatch(actions.toggleIsFetching(true));
            dispatch(actions.setFilter(filter));
            let response = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setCurrentPage(page));
            dispatch(actions.setUsers(response.items));
            dispatch(actions.setTotalUserCount(response.totalCount));
        }
    )
}
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number, apiMethod: (userId:number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => any) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId));

}
export const unFollow = (userId: number): ThunkType => {
    return (
        async (dispatch, getState) => {
         await _followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), actions.unFollowSuccess);
        }
    )
}
export const follow = (userId: number): ThunkType => {
    return (
        async (dispatch) => {
          await _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.followSuccess);
        }
    )
}
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter