import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className='Nav'>
            <ul className='NavUl'>
                <li><a href='#'>Community</a></li>
                <li><a href='#'>Classfields</a></li>
                <li><a href='#'>Config</a></li>
                <li><a href='#'>Shop</a></li>
            </ul>
        </div>
    )
}

export default Nav;