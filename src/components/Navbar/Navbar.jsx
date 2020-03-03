import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.NavbarJsx}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>Photos</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default Navbar;
