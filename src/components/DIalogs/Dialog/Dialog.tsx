import classes from './dialog.module.css';
import React from "react";

type PropsType = {
    name: string
    id: number
}

const Dialog:React.FC<PropsType> = ({name, id}) => {
    let path = `/dialog/${id}`;
    return (
        <li className={classes.dialog}>

            <a
                href={path}
                key={id}
            >{name}</a>
        </li>
    )
}
export default Dialog;
