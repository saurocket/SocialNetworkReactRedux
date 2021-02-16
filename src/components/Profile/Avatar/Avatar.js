import clasess from './avatar.module.css';
import Spinner from "../../common/spinner/Spinner";
import workImage from "../../../assets/images/ProfileImage/work.svg"
import relaxImage from "../../../assets/images/ProfileImage/relax.svg"

const Avatar = ({profile}) => {

    if (!profile) {
        return (
            <Spinner/>
        )
    }
    const {contacts} = profile
    const arrSocial = Object.keys(contacts);


    return (
        <div className={clasess.wrapper}>
           <div className={clasess.mainInfo}>
                <h3>{profile.fullName}</h3>
               <div className={clasess.box}>
                   <img src={profile.photos.small}/>
               </div>
               <p className={clasess.status}>{profile.aboutMe}</p>

           </div>
            <div className={clasess.discription}>

                <ul className={clasess.list}>
                    {
                        arrSocial.map(item => {
                            if (contacts[item]) {
                                return (
                                    <li className={clasess.item}>
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
export default Avatar;