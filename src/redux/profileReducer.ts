import {stopSubmit} from "redux-form";
import {ContactsType, PhotosType, PostsType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../API/profile-api";


export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you", like: 2},
        {id: 2, post: "Buy Buy beautiful", like: 3},
        {id: 3, post: "I'm be fine", like: 3},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    profileUpdate: false,
}

const profileReducer = (state = initialState, action: ActionCreaterType): InitialStateType => {

    switch (action.type) {
        case "DELETE_POST": {
            return {...state, posts: state.posts.filter(u => u.id != action.postId)}
        }
        case "SAVE_PROFILE_SUCCESS": {
            return {...state, profileUpdate: true}
        }
        case "SAVE_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case "ADD_POST" : {
            let newPost = {
                id: 3,
                post: action.newPostBody,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case    "SET_STATUS": {
            return {
                ...state, status: action.status
            }
        }

        default:
            return state;
    }
}
export default profileReducer;



export const actions = {
    deletePost: (postId: number) => ({type: "DELETE_POST", postId} as const),
    addPost: (newPostBody: string) => ({type: "ADD_POST", newPostBody} as const),
    setUserProfile: (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SET_STATUS", status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SAVE_PHOTO_SUCCESS", photos} as const),
    saveProfileSuccess: () => ({type: "SAVE_PROFILE_SUCCESS"} as const)
}




export const getStatus = (userId: number): ThunkActionType => {
    return (
        async (dispatch) => {
            let response = await profileAPI.getStatus(userId);
            dispatch(actions.setStatus(response))
        }
    )
}
export const updateStatus = (status: string): ThunkActionType => {
    return (
        async (dispatch) => {
            let response = await profileAPI.updateStatus(status);
            if (response.resultCode === 0) {
                dispatch(actions.setStatus(status));
            }
        }

    )
}
export const updatePhoto = (file:File): ThunkActionType => {
    return (
        async (dispatch) => {
            try {
                let response = await profileAPI.updatePhoto(file);
                if (response.resultCode === 0) {
                    dispatch(actions.savePhotoSuccess(response.data));
                }
            } catch (error) {
                //dispatch something action
            }
        }
    )
}
export const saveProfile = (data: ProfileType): ThunkActionType => {
    return (
        async (dispatch, getState) => {

            let id = getState().auth.userId;
            if (!id) {
                id = 1;
            }
            let response = await profileAPI.saveProfile(data);
            if (response.data.resultCode === 0) {

                dispatch(getCurrentProfile(id));
            } else {

                dispatch(stopSubmit("profileInfo", {_error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0])
            }
        }
    )
}

export const getCurrentProfile = (userId: number): ThunkActionType => {
    return (
        async (dispatch) => {
            let response = await profileAPI.getUsers(userId);
            dispatch(actions.setUserProfile(response));
        }
    )
}

export type InitialStateType = typeof initialState;
type ActionCreaterType = InferActionsTypes<typeof actions>
type ThunkActionType = BaseThunkType<ActionCreaterType>