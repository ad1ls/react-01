import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    )
}
const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div>
                <div className={s.DialogItem}>
                    <DialogItem name='Adil' id='1' />
                    <DialogItem name='Ali' id='2' />
                    <DialogItem name='Artur' id='3' />
                    <DialogItem name='Ivan' id='4' />
                    <DialogItem name='Alina' id='5' />
                </div>
            </div>
            <div>
                <div className={s.Message}>
                    <Message message='Hi'/>
                    <Message message='Ypo'/>
                    <Message message='EWewewewe'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
