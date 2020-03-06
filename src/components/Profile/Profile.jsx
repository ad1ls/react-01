import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post'

const Profile = (props) => {
  let postData = [
    { id: 1, message: 'Naruto' },
    { id: 2, message: 'Sasuke' }
  ];

  let postElements = postData.map((p) => <Post message={p.message} id={p.id} />);

  return (
    <div className={s.ProfileJsx}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;
