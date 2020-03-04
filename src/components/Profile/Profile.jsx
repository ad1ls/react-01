import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div className={s.ProfileJsx}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;
