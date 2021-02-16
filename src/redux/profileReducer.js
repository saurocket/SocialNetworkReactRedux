import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
    posts: [
        {id: 1, post: "Hi, how are you", like: 2},
        {id: 2, post: "Buy Buy beautiful", like: 3},
        {id: 3, post: "I'm be fine", like: 3},
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
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

export const getStatus= (userId) => {
    return(
        (dispatch) => {
            profileAPI.getStatus(userId).
            then(response=> {

                dispatch(setStatus(response.data))
            });
        }
    )
}
export const updateStatus = (status) => {
    return (
        (dispatch) => {
            profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
                })
        }


    )


}



export const getCurrentProfile = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getUsers(userId).then(response => {
               dispatch(setUserProfile(response.data));
            });
        }
    )
}