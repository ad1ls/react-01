import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {props.item}
            </div>
            <div className={s.Message}>
                {props.pro}
            </div>
        </div>
    )
}

export default Dialogs;
