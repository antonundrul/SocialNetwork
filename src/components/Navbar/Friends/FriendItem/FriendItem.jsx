import s from "./FriendItem.module.css"
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm"/>
            {props.friend.name}
        </div>
    );
}

export default FriendItem;
