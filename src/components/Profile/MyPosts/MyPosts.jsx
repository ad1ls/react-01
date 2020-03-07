import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div>
            <div className={s.MyPosts}>
                <div><p>Post Post Post</p></div>
                <div><textarea>Chiki</textarea></div>
                <div><button>Click</button></div>
            </div>
            <div className={s.Posts}>
                {props.propspost}
            </div>
        </div>
    )
}

export default MyPosts;

