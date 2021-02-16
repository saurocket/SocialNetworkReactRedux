import classes from './NewsPost.module.css'
const NewPost = ({id, header, newsBody}) => {

    return (
        <div className={classes.post}>
            <h2>{header}</h2>
            <p>{newsBody}</p>
        </div>
    )
}
export  default NewPost;