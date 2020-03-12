import React from 'react';
import s from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar';
import { Route } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    // let img = props.posts.map((p) => <Avatar  />);
    return (
        <div>
            <Route path='/dialogs/' render={path}> <NavLink className={s.dialog} to={path}>{props.name}</NavLink></Route>
        </div >
    )
}

export default DialogItem;
