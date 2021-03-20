import classes from './Spinner.module.css'
import React from "react";
import img from '../../../assets/images/spinner.svg'
type SpinnerProps = {
    isFetching?: boolean
}
const Spinner:React.FC<SpinnerProps> = ({isFetching}) => {
    return (
        <div className={classes.wrapper}>
        <img className={classes.spinners} src={img}/>
        </div>
    )
}
export default Spinner;