
import Spinner from "../../common/spinner/Spinner";
import ProfileShow from "./AvatarEdite/ProfileShow";
import {useState} from "react";
import ProfileEditForm from "./ProfileEdit/ProfileEditForm";
import {reduxForm} from "redux-form";
const Avatar = ({profile,isOwner, updatePhoto, saveProfile}) => {

    const [editMode, setEdit] = useState(false);

    const changeEdit =  () => {
        editMode ? setEdit(false) : setEdit (true);
    }

    const onSubmit = (data) => {
        saveProfile(data).then(() => {changeEdit()})

    }


    if (!profile) {
        return (
            <Spinner/>
        )
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            updatePhoto(e.target.files[0])
        }
    }





    return (
       <>
           {editMode
               ? <ProfileForm
                   initialValues={profile}
                   changeEdit={changeEdit}
                   onSubmit={onSubmit}
                   profile={profile}
               />
           :  <ProfileShow
               profile={profile}
               isOwner={isOwner}
               updatePhoto={updatePhoto}
               onMainPhotoSelected={onMainPhotoSelected}
               changeEdit={changeEdit}
           />}
       </>
    )

}
const ProfileForm = reduxForm({
    form: 'profileInfo' // a unique name for this form
})(ProfileEditForm);


export default Avatar;