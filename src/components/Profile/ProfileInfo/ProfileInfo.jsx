import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userDefaultAvatar from "../../../assets/images/userDefaultAvatar.png";
import React from "react";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.descriptionBlock}>

            <img src={profile.photos.large != null
                ? profile.photos.large
                : userDefaultAvatar}/>
            <h1>{profile.fullName}</h1>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
            <span>{profile.aboutMe}</span>
            <span>{profile.lookingForAJob}</span>
            <span>{profile.lookingForAJobDescription}</span>
        </div>

    )
}

export default ProfileInfo;