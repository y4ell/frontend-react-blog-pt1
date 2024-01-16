import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import logo from './../../assets/logo-small.png'
// <nav className="navigation">
//     <p className="company-brand-name">Analytica</p>
//     <ul>
//         <li>About us</li>
//         <li>Strategy</li>
//         <li>Prices</li>
//         <li>Contact</li>
//     </ul>
// </nav>
function Navigation() {
    return (

        <nav className="navigation">
            <p className="company-logo"><img src={logo} alt="company-logo"/>Blogventure</p>
        <ul>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'active-link' : 'default-link'}
                    to="./">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'active-link' : 'default-link'}
                    to="./posts">
                    Alle posts
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'active-link' : 'default-link'}
                    to="./new-post">
                    Nieuwe post maken
                </NavLink>
            </li>
        </ul>
        </nav>


    )

}

export default Navigation