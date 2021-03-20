import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {ContactsType, PhotosType, PostsType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';



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
export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any):InitialStateType => {

    switch (action.type) {
        case DELETE_POST: {
            return {...state,posts: state.posts.filter(u => u.id != action.postId)}
        }
        case SAVE_PROFILE_SUCCESS: {
            return {...state, profileUpdate: true}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case ADD_POST : {
            let newPost = {
                id: 3,
                post: action.newPostBody,
                like: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case    SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }

        default: return state;
    }
}
export default profileReducer;

type DeletePostActionType = {type: typeof DELETE_POST, postId: number}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST,postId})

type AddPostActionType = {
    type: typeof ADD_POST
    newPostBody: string
}
export const addPost = (newPostBody: string):AddPostActionType => ({type: ADD_POST, newPostBody})

type SetUserProfileActionType = {type: typeof SET_USER_PROFILE
    profile: ProfileType}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
const setStatus = (status: string):SetStatusActionType => ({type: SET_STATUS, status})

type SavePhotoSuccessActionType ={
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

type SaveProfileSuccessActionType = {
    type: typeof SAVE_PROFILE_SUCCESS
}
const saveProfileSuccess = ():SaveProfileSuccessActionType => ({type: SAVE_PROFILE_SUCCESS})

export const getStatus= (userId: number) => {
    return(
      async  (dispatch:any) => {
           let response = await profileAPI.getStatus(userId);
                dispatch(setStatus(response.data))
        }
    )
}
export const updateStatus = (status:string) => {
    return (
     async  (dispatch: any) => {
         let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
        }
    )
}
export const updatePhoto = (file: any) => {
    return (
       async (dispatch: any) => {
           try {
               let response = await profileAPI.updatePhoto(file);
               if (response.data.resultCode === 0){
                   dispatch(savePhotoSuccess(response.data.data.photos));
               }
           }catch (error) {
               //dispatch something action
           }
       }
    )
}
export const saveProfile = (data:ProfileType) => {
    return(
        async (dispatch :any, getState: any) => {
            const id = getState().auth.userId;
            let response = await profileAPI.saveProfile(data);
            if (response.data.resultCode === 0){
                dispatch(getCurrentProfile(id));
            }else{

                dispatch(stopSubmit("profileInfo", {_error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0])
            }
        }
    )
}

export const getCurrentProfile = (userId:number) => {
    return (
      async  (dispatch: any) => {
        let response = await profileAPI.getUsers(userId);
               dispatch(setUserProfile(response.data));
        }
    )
}