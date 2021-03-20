import React, {LegacyRef, MouseEventHandler} from 'react';
import classes from './CreatePost.module.css';

export  type NewMessageType = {
    headerNews: string
    bodyNews: string
}
type PropsType = {
    newMessage: NewMessageType
    addNewsPost: () => void
    changeNewsBody: (text:string) => void
    changeNewsHeader: (text:string) => void
}
const CreatePost:React.FC<PropsType> = ({newMessage, addNewsPost, changeNewsBody, changeNewsHeader}) => {

    const {headerNews, bodyNews} = newMessage;

    let headerTemp = React.createRef<HTMLInputElement>();
    let bodyTemp = React.createRef<HTMLTextAreaElement>();
// react.d.ts
    const onChangeHeader =() => {
    let text = headerTemp.current ?  headerTemp.current.value : ''
        changeNewsHeader(text);
    }
    const onChangeBody = () => {
        let text = bodyTemp.current ?  bodyTemp.current.value: ''
        changeNewsBody(text);
    }
    const onAddPostNews = (e:any) => {
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