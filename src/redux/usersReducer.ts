import {updateObjectInArray} from "../utils/objectHelpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../API/users-api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    follwingInProgress: [] as Array<number> //Array Of users ID
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
    } as const)
}

export const getUsers = (page: number, pageSize: number): ThunkType => {
    return (
        async (dispatch, getState) => {
            dispatch(actions.toggleIsFetching(true));
            let response = await usersAPI.getUsers(page, pageSize);
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setCurrentPage(page));
            dispatch(actions.setUsers(response.items));
            dispatch(actions.setTotalUserCount(response.totalCount));
        }
    )
}
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => any) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId));

}


export const unFollow = (userId: number): ThunkType => {
    return (
        async (dispatch, getState) => {
            _followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), actions.unFollowSuccess);
        }
    )
}
export const follow = (userId: number): ThunkType => {
    return (
        async (dispatch) => {
            _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.followSuccess);
        }
    )
}
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>
type InitialStateType = typeof initialState;