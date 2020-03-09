import React from 'react';
import s from './Friends.module.css';
import FriendsPhoto from './FriendsPhoto/FriendsPhoto';

const Friends = () => {
  return (
    <div className={s.Friends}>
      <div className={s.tittle}><h3>Friends</h3></div>
      <div className={s.FriendsPhoto}>
        <div className={s.photo1}><FriendsPhoto /></div>
        <div className={s.photo2}><FriendsPhoto /></div>
        <div className={s.photo3}><FriendsPhoto /></div>
      </div>
    </div>
  )
}

export default Friends;