import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you", like: 2},
        {id: 2, post: "Buy Buy beautiful", like: 3},
        {id: 3, post: "I'm be fine", like: 3},
    ],
    profile: null,
    status: '',
    profileUpdate: false,

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_POST: {
            return {...state,posts: state.posts.filter(u => u.id != action.postId)}
        }
        case SAVE_PROFILE_SUCCESS: {
            return {...state, profileUpdate: true}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,postId
    }

}

export const addPost = (newPostBody) =>{
    return {type: ADD_POST, newPostBody}
}
export const setUserProfile = (profile) => {
    return({
            type: SET_USER_PROFILE,
            profile
        })
}
const setStatus = (status) => {
    return ({
         type: SET_STATUS,
            status
    })
}
const savePhotoSuccess = (photos) => {
    return ({
        type: SAVE_PHOTO_SUCCESS,
        photos

    })
}
const saveProfileSuccess = () => {
    return(
        {
            type: SAVE_PROFILE_SUCCESS
        }
    )
}

export const getStatus= (userId) => {
    return(
      async  (dispatch) => {
           let response = await profileAPI.getStatus(userId);
                dispatch(setStatus(response.data))
        }
    )
}
export const updateStatus = (status) => {
    return (
     async  (dispatch) => {
         let response = await profileAPI.updateStatus(status);
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
        }
    )
}
export const updatePhoto = (file) => {
    return (
       async (dispatch) => {
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
export const saveProfile = (data) => {
    return(
        async (dispatch, getState) => {
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




export const getCurrentProfile = (userId) => {
    return (
      async  (dispatch) => {
        let response = await profileAPI.getUsers(userId);
               dispatch(setUserProfile(response.data));
        }
    )
}