import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <h1>{props.profile.fullName}</h1>
            <ProfileStatusWithHooks status={props.status}
                                    updateStatus={props.updateStatus}/>
            <span>{props.profile.aboutMe}</span>
            <span>{props.profile.lookingForAJob}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>

    )
}

export default ProfileInfo;