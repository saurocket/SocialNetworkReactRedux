
import {NavLink} from "react-router-dom";
import classes from './dialog.module.css';



const Dialog = ({name, id}) => {
    let path = `/dialog/${id}`;
    return (
        <li className={classes.dialog}>
            {/* <NavLink to={path}>{name}</NavLink> */}
            <a
                href={path}
                key={id}
            >{name}</a>
        </li>
    )
}
export default Dialog;
