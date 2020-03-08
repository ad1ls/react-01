import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post'

const Profile = (props) => {

  return (
    <div className={s.ProfileJsx}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;
