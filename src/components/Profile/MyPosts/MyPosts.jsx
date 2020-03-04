import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div><p>Post Post Post</p></div>
            <div><textarea>Chiki</textarea></div>
            <div><button>Click</button></div>
        </div>
    )
}

export default MyPosts;

