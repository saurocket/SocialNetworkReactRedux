import clasess from './profile.module.css';
import Post from "./posts/posts";
import Avatar from './Avatar/Avatar'

import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWichHooks";




const Profile = ({profilePage,addPost, status, updateStatus}) => {

    return (
        <div className={clasess.content}>
            <ProfileStatusWithHooks
                updateStatus={updateStatus}
                status={status}/>
            <Avatar
            profile={profilePage.profile}
            />
            <Post
                profilePage={profilePage}
                addPost={addPost}
            />
      </div>
    )
}
export default Profile;


