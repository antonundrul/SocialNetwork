import s from "./Navbar.module.css"
import Links from "./Links/Links";

const Navbar = (props) => {
    return (

        <nav className={s.nav}>
            <Links/>
            {/*<Friends friends={store.getState().sidebar.friends}/>*/}
        </nav>
    );
}

export default Navbar;
