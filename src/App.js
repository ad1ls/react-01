import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Head/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='Main'>
      <Header />
      <Navbar />
      <Profile />
    </div >
  );
}



export default App;
