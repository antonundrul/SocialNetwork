import s from "./Navbar.module.css"
import Links from "./Links/Links";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";

const Navbar = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return(
                        <nav className={s.nav}>
                            <Links/>
                            <Friends friends={store.getState().sidebar.friends}/>
                        </nav>
                    )
                }
            }
        </StoreContext.Consumer>

    );
}

export default Navbar;
