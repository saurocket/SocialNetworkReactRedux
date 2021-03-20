import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utils/objectHelpers";
import {UserType} from "../types/types";



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    follwingInProgress: [] as Array<number> //Array Of users ID
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,  "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,  "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => {
    return ({type: FOLLOW, userId})
}
type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollowSuccess = (userId:number):UnFollowSuccessActionType => {
    return ({type: UNFOLLOW, userId})
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users:Array<UserType>):SetUsersActionType => ({type: SET_USERS, users})
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUserCount = (totalUsersCount:number):SetTotalUserCountActionType =>
    ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    follwingInProgress: boolean
    userId: number
 }
export const toggleIsFollowingProgress = (follwingInProgress: boolean, userId:number):ToggleIsFollowingProgressActionType =>
    ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    follwingInProgress,
    userId
})


export const getUsers = (page:number, pageSize: number) => {
    return (
        async (dispatch:any) => {
            dispatch(toggleIsFetching(true));
            let response = await usersAPI.getUsers(page, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(page));
            dispatch(setUsers(response.items));
            dispatch(setTotalUserCount(response.totalCount));
        }
    )
}


const followUnfollowFlow = async (dispatch: any, userId:number, apiMethod:any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));

}


export const unFollow = (userId: number) => {
    return (
        async (dispatch:any) => {
            followUnfollowFlow(dispatch, userId,usersAPI.unFollowUser.bind(usersAPI),unFollowSuccess);
        }
    )
}
export const follow = (userId: any) => {
    return (
        async (dispatch:any) => {
            followUnfollowFlow(dispatch, userId,usersAPI.followUser.bind(usersAPI),followSuccess);
        }
    )
}
const rsReducer = 'sdfsdf';