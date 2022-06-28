import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://pngicon.ru/file/uploads/voda.png"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
