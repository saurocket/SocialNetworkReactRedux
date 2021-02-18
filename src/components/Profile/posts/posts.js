import clasess from './posts.module.css';
import Post_item from './posts-item/posts-item';
import AddPost from "./AddPost/AddPost";
import React from 'react';


const Post = React.memo((props) => {
        console.log('renderYO');
        let posts =  props.profilePage.posts.map(p => {
            return(
                <Post_item messege={p.post}  like={p.like} id={p.id}/>
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
 