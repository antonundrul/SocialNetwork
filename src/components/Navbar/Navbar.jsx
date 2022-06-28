import s from "./Navbar.module.css"
import Links from "./Links/Links";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <Links/>
            <Friends friends={props.state.friends}/>
        </nav>
    );
}

export default Navbar;
