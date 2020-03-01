import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import Photo from './Photo';

const Header = () => {
  return (
    <div className={s.HeaderJsx}>
      <Logo />
      <Nav />
      <Search />
      <Photo />
    </div>
  )
}

export default Header;