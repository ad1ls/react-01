import React from 'react';
import s from './Friends.module.css';
import FriendsPhoto from './FriendsPhoto/FriendsPhoto';

const Friends = () => {
  return (
    <div className={s.Friends}>
      <div><h3>Friends</h3></div>
      <FriendsPhoto /> 
      <FriendsPhoto /> 
      <FriendsPhoto /> 
    </div>
  )
}

export default Friends;