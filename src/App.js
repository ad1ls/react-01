import React from 'react';
import './App.css';
import Header from './components/Head/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Com from './components/Com/Com';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className='Main'>
      <Header />
      <Navbar />
      <div className='changeProfile'>
        <Profile />
        </div>
      <Com />
    </div >
  );
}



export default App;
