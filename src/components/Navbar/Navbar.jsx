import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.NavbarJsx}>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/dialogs'>Messages</a></li>
                <li><a href='/news'>News</a></li>
                <li><a href='/music'>Music</a></li>
                <li><a href='/settings'>Settings</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
