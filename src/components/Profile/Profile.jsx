import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './Post/Post';

const Profile = () => {
  return (
    <div className={s.ProfileJsx}>
      <img src='https://avatars.mds.yandex.net/get-pdb/1996600/799eb17a-3def-4b8d-aa33-baa812f22b3b/s1200'></img>
      <MyPosts />
      <Post message='Naruto' />
      <Post message='Sasuke' />
    </div>
  )
}

export default Profile;