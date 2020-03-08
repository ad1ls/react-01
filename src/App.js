import React from 'react';
import './App.css';
import Header from './components/Head/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Com from './components/Com/Com';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='Main'>
        <Header />
        <Navbar />
        <div className='changeProfile'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
        <Com />
      </div >
    </BrowserRouter>
  );
}



export default App;
