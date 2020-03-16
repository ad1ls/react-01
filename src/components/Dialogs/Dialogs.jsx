import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch(action);
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
                <div><textarea placeholder="Write here" onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea></div>
                <div><button onClick={addMessage}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
