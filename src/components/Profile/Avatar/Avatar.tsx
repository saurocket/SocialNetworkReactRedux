import Spinner from "../../common/spinner/Spinner";
import ProfileShow from "./AvatarEdite/ProfileShow";
import React, {ChangeEvent, useState} from "react";
import ProfileEditForm from "./ProfileEdit/ProfileEditForm";
import {reduxForm} from "redux-form";
import {ProfileType} from "../../../redux/profileReducer";


type PropsType = {
    profile:ProfileType | null
    isOwner: boolean
    updatePhoto: () => void
    saveProfile: (data:object) => void
}

const Avatar:React.FC<PropsType> = ({profile,isOwner, updatePhoto, saveProfile}) => {

    const [editMode, setEdit] = useState(false);

    type ChangeEditType = ()=>void

    const changeEdit:ChangeEditType =  () => {
        editMode ? setEdit(false) : setEdit (true);
    }

    const onSubmit = (data: object) => {
        // @ts-ignore
        saveProfile(data).then(() => {changeEdit()})

    }

    if (!profile) {
        return (
            <Spinner/>
        )
    }
    const onMainPhotoSelected = (e:ChangeEvent<HashChangeEvent>) => {
        // @ts-ignore
        if (e.target.files.length){
            // @ts-ignore
            updatePhoto(e.target.files[0])
        }
    }


    return (
       <>
           {editMode
               ? <ProfileForm
                   initialValues={profile}
                   // @ts-ignore
                   changeEdit={changeEdit}
                   onSubmit={onSubmit}
                   profile={profile}
               />
           :  <ProfileShow
               profile={profile}
               isOwner={isOwner}
               updatePhoto={updatePhoto}
                   // @ts-ignore
               onMainPhotoSelected={onMainPhotoSelected}
               changeEdit={changeEdit}
           />}
       </>
    )

}
const ProfileForm = reduxForm({
    form: 'profileInfo' // a unique name for this form
    // @ts-ignore
})(ProfileEditForm);


export default Avatar;