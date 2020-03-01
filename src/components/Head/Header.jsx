import React from 'react';
import s from './Header.module.css';
import Logo from './Headcomp/Logo';
import Nav from './Headcomp/Nav';
import Search from './Headcomp/Search';
import Photo from './Headcomp/Photo';

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