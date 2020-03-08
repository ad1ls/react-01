import React from 'react';
import Post from '../Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postElements = props.posts.map((p) => <Post message={p.message} id={p.id} />);

    return (
        <div>
            <div className={s.MyPosts}>
                <div><p>Post Post Post</p></div>
                <div><textarea>Chiki</textarea></div>
                <div><button>Click</button></div>
            </div>
            <div className={s.Posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

