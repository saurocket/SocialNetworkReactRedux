import clasess from './nav.module.css';
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";
const Nav = ({navPage}) => {
    const {friendsBar} =navPage;

    let friensBar = friendsBar.map(friend => {
       return (
           <li
               key={friend.id}
           ><FriendsBar
               name={friend.name}
               lastName={friend.lastName}
               nick={friend.nickName}

           /></li>
       )

    });


    return (
        <nav className={clasess.nav}>
            <ul className="list-group list-group-flush">
                <li className={clasess.item}>
                    <NavLink to="/profile" activeClassName={clasess.activeLink}>Profile</NavLink>
                </li>
                <li className={clasess.item}>
                    <NavLink to="/dialogs" activeClassName={clasess.activeLink}>Messages</NavLink>
                </li>
                <li className={clasess.item}>
                    <NavLink to="/news" activeClassName={clasess.activeLink}>News</NavLink>
                </li>
                <li className={clasess.item}>
                    <NavLink to="/music" activeClassName={clasess.activeLink}>Music</NavLink>
                </li>
                <li className={clasess.item}>
                    <NavLink to='/users' activeClassName={clasess.activeLink}>Users</NavLink>
                </li>
                <li className={clasess.item}>
                    <NavLink to='/settings' activeClassName={clasess.activeLink}>Settings</NavLink>
                </li>
            </ul>
            <ul className={clasess.friendsBar}>

                {friensBar}

            </ul>

        </nav>
    );
}
export default Nav;