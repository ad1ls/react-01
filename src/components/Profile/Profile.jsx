import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';

const Profile = (props) => {

  let postsData = [
    { id: 1, post: 'Yo beach' },
    { id: 2, post: 'Hey Imma Rich' }
  ];
  let postsElements = postsData.map((p) => <Post postex={p.post} id={p.id} />);

  return (
    <div className={s.ProfileJsx}>
      <ProfileInfo />
      <MyPosts propspost={postsElements} />
    </div>
  )
}

export default Profile;
