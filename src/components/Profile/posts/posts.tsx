import clasess from './posts.module.css';
import Post_item from './posts-item/posts-item';
import AddPost from "./AddPost/AddPost";
import React from 'react';
import {InitialStateType} from "../../../redux/profileReducer";

type TypeProps = {
    profilePage: InitialStateType
    addPost: (post:string) => void
}
const Post:React.FC<TypeProps> = React.memo((props) => {
        console.log('renderYO');
        let posts =  props.profilePage.posts.map(p => {
            return(
                <Post_item id={p.id} messege={p.post}  like={p.like}/>
            )
        });
        return (
            <div className={clasess.posts}>
                <AddPost
                    addPost={props.addPost}
                />
                {posts}
            </div>
        )
});
export default Post;
 