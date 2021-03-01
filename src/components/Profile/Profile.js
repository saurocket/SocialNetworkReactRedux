import clasess from './profile.module.css';
import Post from "./posts/posts";
import Avatar from './Avatar/Avatar'

import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWichHooks";





const Profile = ({profilePage,addPost, status, updateStatus, updatePhoto,  photo, isOwner, saveProfile}) => {

    return (
        <div className={clasess.content}>
            <ProfileStatusWithHooks
                updateStatus={updateStatus}
                status={status}/>
            <Avatar
            profile={profilePage.profile}
            updatePhoto={updatePhoto}
            photo={photo}
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


