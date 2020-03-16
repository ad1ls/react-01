import React from 'react';
import Post from '../Post/Post'
import s from './MyPosts.module.css';
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }

    let postElements = props.posts.map((p) => <Post message={p.message} id={p.id} like={p.likesCount} />);
    let newPostElement = React.createRef();
    return (
        <div>
            <div className={s.MyPosts}>
                <div><p>Post Post Post</p></div>
                <div>
                    <textarea
                        placeholder="Write here"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}>
                    </textarea>
                </div>
                <div><button onClick={addPost}>Click</button> </div>
            </div>
            <div className={s.Posts}>{postElements}</div>
        </div>
    )
}

export default MyPosts;

