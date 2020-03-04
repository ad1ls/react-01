import React from 'react';
import Post from '../Post/Post'
import s from './MyPosts.module.css';

const MyPosts = () => {
    let postData = [
        { id: 1, message: 'Naruto' },
        { id: 2, message: 'Sasuke' }
    ];

    return (
        <div>
            <div className={s.MyPosts}>
                <div><p>Post Post Post</p></div>
                <div><textarea>Chiki</textarea></div>
                <div><button>Click</button></div>
            </div>
            <div className={s.Posts}>
                <Post message={postData[0].message} />
                <Post message={postData[0].message} />
            </div>
        </div>
    )
}

export default MyPosts;

