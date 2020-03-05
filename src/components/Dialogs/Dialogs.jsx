import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Adil' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Artur' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Alina' }
    ];
    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Ypo' },
        { id: 3, message: 'EWewewewe' }
    ];

    let dialogElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messageElements = messageData.map((m) => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {dialogElements}
            </div>
            <div className={s.Message}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;
