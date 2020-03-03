import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className='postClass'>
      <img src='https://yandex.ru/images/_crpd/Psp6qa358/50159317nzW/D2oR03cxW1wR56fYM8YmDDt5YPd90plwdreTbaZ82aDPm78XdyvbEkpLLWgRg5E3E-xrXP2oF2-Bk3SBY7gvkp_90Vbi4Y9MhHY1H2bRdox57XfiaI'></img>
      <div>
        {props.message} 
      </div>
    </div>
  )
}

export default Post;
