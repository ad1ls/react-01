import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    let newPostElement = React.createRef();

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {dialogsElements}
            </div>
            <div className={s.Message}>
                {messagesElements}
            </div>
            <div className={s.Send}>
                <textarea ref={newPostElement}></textarea>
                <div><button onClick={addPost}>Send message</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
