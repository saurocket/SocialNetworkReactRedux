import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsers= (state:AppStateType) => {
        return  state.usersPage.users
}
export const getUsersReselect = createSelector(getUsers,(users) => {
        return  users.filter(user => true);
})

export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return   state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.follwingInProgress
}
export const getFilter = (state: AppStateType) => {
    return state.usersPage.filter
}
