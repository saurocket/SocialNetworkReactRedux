import clasess from './addPost.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControll/FormsControll";

const maxLength10 = maxLengthCreator(10)
const AddPost = ({addPost}) => {
    const onSubmit = (value) => {
        console.log(value.newPostBody);
        addPost(value.newPostBody)
    };
    const AddNewPost = (props) => {
        return(
            <form onSubmit={props.handleSubmit}  className={clasess.post}>
                <Field
                    name="newPostBody"
                    placeholder="type_post_here"
                    component={Textarea}
                    validate={[required, maxLength10]}
                />
                <button className={clasess.btn}>AddPost</button>
            </form>
        )
    };
    const AddNewPostContainer = reduxForm({form: `PostNewPostText`})(AddNewPost);
    return (
        <div className={clasess.wrapper}>
            <h2 className={clasess.header}>New Posts</h2>
            <AddNewPostContainer
                onSubmit={onSubmit}
            />
        </div>
    )
}



export default AddPost;