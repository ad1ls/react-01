import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }
    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'ADD-NEW-MESSAGE', newMessage: text });
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
            <div className={s.Send}>
                <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
                <div><button onClick={addMessage}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
