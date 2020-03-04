import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.postClass}>
      <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/1996600/799eb17a-3def-4b8d-aa33-baa812f22b3b/s1200'></img>
      </div>
      <div>
        Description
      </div>
    </div>
  )
}

export default ProfileInfo;

