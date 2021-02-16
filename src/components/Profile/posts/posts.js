import clasess from './posts.module.css';
import Post_item from './posts-item/posts-item';
import AddPost from "./AddPost/AddPost";

const Post = ({profilePage,addPost}) => {


    let posts = profilePage.posts.map(p => {
        return(
            <Post_item messege={p.post}  like={p.like} id={p.id}/>
        )

    });
    return (
        <div className={clasess.posts}>
               <AddPost
                   addPost={addPost}
               />
            {posts}
        </div>
    )
}
export default Post;
 