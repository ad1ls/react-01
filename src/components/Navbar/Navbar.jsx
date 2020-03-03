import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.NavbarJsx}>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/dialogs'>Messages</a></li>
                <li><a href='#'>Photos</a></li>
                <li><a href='#'>Music</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
