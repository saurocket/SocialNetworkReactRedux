import clasess from './profile.module.css';
import Post from "./posts/posts";
import Avatar from './Avatar/Avatar'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWichHooks";

import {PhotosType} from "../../types/types";
import {InitialStateType} from "../../redux/profileReducer";

type PropsType = {
    profilePage: InitialStateType
    addPost: (post:string) => void
    status: string
    updateStatus: (status:string) => void
    updatePhoto: () => void
    photo: PhotosType
    isOwner: boolean
    saveProfile: () => void
}

const Profile:React.FC<PropsType> = ({profilePage,addPost, status, updateStatus, updatePhoto,  photo, isOwner, saveProfile}) => {
    return (
        <div className={clasess.content}>
            <ProfileStatusWithHooks
                updateStatus={updateStatus}
                status={status}/>
            <Avatar
            profile={profilePage.profile}
            updatePhoto={updatePhoto}
            isOwner={isOwner}
            saveProfile={saveProfile}
            />
            <Post
                profilePage={profilePage}
                addPost={addPost}
            />
      </div>
    )
}
export default Profile;


