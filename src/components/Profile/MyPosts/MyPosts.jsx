import React from 'react';
import Post from '../Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postElements = props.posts.map((p) => <Post message={p.message} id={p.id} like={p.likesCount} />);
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    let newPostElement = React.createRef();


    return (
        <div>
            <div className={s.MyPosts}>
                <div><p>Post Post Post</p></div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPost}>Click</button></div>
            </div>
            <div className={s.Posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

