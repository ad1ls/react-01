import React from 'react';
import Post from '../Post/Post'
import s from './MyPosts.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
    let postElements = props.posts.map((p) => <Post message={p.message} id={p.id} like={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }
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
                <div><button onClick={addPost}>Add post</button> </div>
            </div>
            <div className={s.Posts}>{postElements}</div>
        </div>
    )
}

export default MyPosts;

