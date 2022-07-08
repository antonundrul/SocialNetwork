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

                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;