import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
