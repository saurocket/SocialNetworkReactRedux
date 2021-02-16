import React from 'react';
import clases from './header.module.css';
import {NavLink} from "react-router-dom";
import {logOutUser} from "../../redux/authReduce";





const Header = (props) => {

    return (
           <header className="header col-md-12">
                <div className="container">
                    <nav className={clases.nav}> 
                    <div className="logo-wrapper">
                        <a href="index.html"><span>Web</span>Social</a>
                        <a herf="https://github.com/saurocket">
                            <span
                                className={clases.made}>(core-29)
                            </span>
                        </a>
                    </div>
                    <div className={clases.loginBlock}>

                        { props.isAuth ?

                            <ul>
                                <li><span>{props.login}</span></li>
                                <li><span>{props.email}</span></li>
                                <li><span>{props.userId}</span></li>
                                <li><button onClick={props.logOutUser}>LogOut</button></li>

                            </ul>

                            : <NavLink to={'/login'}>  Login </NavLink>}
                    </div>
                    </nav>
                </div>
            </header>
    )
}
export default Header;