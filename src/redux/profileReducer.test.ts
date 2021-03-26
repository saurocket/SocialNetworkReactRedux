import profileReducer, {actions, ProfileType} from "./profileReducer";
import {PostsType} from "../types/types";
let state = {
    posts: [
        {id: 1, post: "Hi, how are you", like: 2},
        {id: 2, post: "Buy Buy beautiful", like: 3},
        {id: 3, post: "I'm be fine", like: 3},
    ]as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    profileUpdate: false,
};
it('renders learn react link', () => {
    let action = actions.addPost("Gogogo");

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4);
});
it('after deleting length of messages should be decrement', () => {
    let action = actions.deletePost(2);

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2);
});
it('after deleting length of messages should incorrect', () => {
    let action = actions.deletePost(1000);

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3);
});









