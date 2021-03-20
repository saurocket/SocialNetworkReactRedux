import clasess from "./ProfileShow.module.css";
import usersPhoto from "../../../../assets/images/addUser.png";
import workImage from "../../../../assets/images/ProfileImage/work.svg";
import relaxImage from "../../../../assets/images/ProfileImage/relax.svg";
import React from "react";
import {ProfileType} from "../../../../redux/profileReducer";



type PropsType = {
    profile: ProfileType
    isOwner: boolean
    onMainPhotoSelected: ()=>void
    changeEdit: ()=> void
}

const ProfileShow:React.FC<PropsType> = ({profile, isOwner, onMainPhotoSelected, changeEdit}) => {

    const {contacts} = profile
    const arrSocial= Object.keys(contacts);


    return (
        <div className={clasess.wrapper}>

            <div className={clasess.mainInfo}>
                {isOwner && <button onClick={changeEdit}>Edit my information</button>}
                <h3>{profile.fullName}</h3>
                <div className={clasess.box}>
                    <img src={profile.photos.large || usersPhoto}/>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <p className={clasess.status}>{profile.lookingForAJobDescription}</p>

            </div>
            <div className={clasess.discription}>

                <ul className={clasess.list}>

                    {
                        arrSocial.map(item => {
                            // @ts-ignore
                            if (contacts[item]) {
                                return (
                                    <li key={item} className={clasess.item}>
                                       {/*@ts-ignore   */}
                                        <a href={contacts[item]}>
                                            {item}
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
            <div className={clasess.work}>
                <p>{profile.lookingForAJobDescription}</p>
                <div className={clasess.workIcon}>
                    <img src={profile.lookingForAJob ? workImage : relaxImage}/>
                </div>
            </div>

        </div>
    )
}
export default ProfileShow;