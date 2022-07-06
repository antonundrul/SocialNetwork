import s from "./Links.module.css"
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <div className={s.item} >
                <NavLink to='/profile' className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.activeLink : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? s.activeLink : s.item }>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='#' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='#' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='#' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </div>
    );
}

export default Links;
