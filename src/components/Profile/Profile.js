import clasess from './profile.module.css';
import Post from "./posts/posts";
import Avatar from './Avatar/Avatar'
import ProfileStatus from "./ProfileStatus/ProfileStatus";




const Profile = ({profilePage,addPost, status, updateStatus}) => {

    return (
        <div className={clasess.content}>
            <ProfileStatus
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


