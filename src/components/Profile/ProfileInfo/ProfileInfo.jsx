import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profileInfoContainer}>
                <img src='https://pngicon.ru/file/uploads/voda.png'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <h1>{props.profile.fullName}</h1>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                {/*<p>{props.profile.contacts}</p>*/}

            </div>
        </div>
    )
}

export default ProfileInfo;