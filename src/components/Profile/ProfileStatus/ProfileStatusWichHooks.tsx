import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import clasess from './ProfileStatus.module.css'

type PropsType = {
    status: string

    updateStatus: (status: string) => void
}



const ProfileStatusWithHooks = (props:PropsType) => {


const [editMode, setEditMode ]= useState(false);
const [status, setStatus ]= useState(props.status);

useEffect( () => {
    setStatus(props.status);
}, [props.status])

 const  statusChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
     setStatus(e.currentTarget.value)
    }

const activateMode = () => {
    setEditMode(true);
};
const deActivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}
    return (
        <div className={clasess.wrapper}>
            { !editMode &&
            <div>
                        <span
                        onDoubleClick={activateMode}
                        >{props.status || `we can't look your status`}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={statusChangeInput}
                    onBlur={deActivateMode}
                 autoFocus={true}  value={status}/>
            </div>
            }

        </div>
    )
}


export default ProfileStatusWithHooks;