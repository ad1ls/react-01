import React from 'react';
import s from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
   // let img = props.posts.map((p) => <Avatar  />);
    return (
        <div>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div >
    )
}

export default DialogItem;
