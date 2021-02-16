
import classes from './Textarea.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const showError = meta.error && meta.touched
    // {`${classes.wrapper} ${classes.error}`}
    return (
        <div className={classes.wrapper + " " +  (showError ? classes.error: + " ")}>
            <div><textarea {...input } {...props}/></div>
            {showError  && <span>{meta.error}</span>}
        </div>

    )
}


export const Input = ({input, meta, ...props}) => {

    const showError = meta.error && meta.touched

    return (
        <div className={classes.wrapper + " " +  (showError ? classes.error: + " ")}>
            <div><input {...input } {...props}/></div>
            {showError  && <span>{meta.error}</span>}
        </div>

    )
}