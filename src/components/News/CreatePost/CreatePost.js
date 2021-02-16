import React from 'react';
import classes from './CreatePost.module.css';
const CreatePost = ({newMessage, addNewsPost, changeNewsBody, changeNewsHeader}) => {

    const {headerNews, bodyNews} = newMessage;

    let headerTemp = React.createRef();
    let bodyTemp = React.createRef();

    const onChangeHeader = () => {
    let text = headerTemp.current.value;
        changeNewsHeader(text);
    }
    const onChangeBody = () => {
        let text = bodyTemp.current.value;
        changeNewsBody(text);
    }
    const onAddPostNews = (e) => {
        e.preventDefault();
        addNewsPost();
    }
    return (
        <div>
                <h2 className={classes.header}>News Constructor</h2>
             <form className={classes.mainForm}>
                <p className={classes.headerForm}>Header</p>
                <input
                    className={classes.inputForm}
                    value={headerNews}
                    ref={headerTemp}
                    onChange={onChangeHeader}
                />
                <p className={classes.headerForm}>Body</p>
                <textarea
                    className={`${classes.inputForm} ${classes.textBody}`}
                    value={bodyNews}
                    ref={bodyTemp}
                    onChange={onChangeBody}
                >
                </textarea>
                <button className={classes.btn}
                onClick={onAddPostNews}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
export default CreatePost;