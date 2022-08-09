import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <h1>{props.profile.fullName}</h1>
            <ProfileStatus status={'Hello my friends'} />
            <span>{props.profile.aboutMe}</span>
            <span>{props.profile.lookingForAJob}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>

    )
}

export default ProfileInfo;