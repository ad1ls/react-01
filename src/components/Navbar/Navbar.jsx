import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dialogs'>Messages</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
            <Friends><NavLink to='/friends'>Friends</NavLink></Friends>
        </div>
    )
}

export default Navbar;
