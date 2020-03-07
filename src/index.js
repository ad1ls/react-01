import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Message from './components/Dialogs/Message/Message';
import DialogItem from './components/Dialogs/DialogItem/DialogsItem';
import Post from './components/Profile/Post/Post';

let dialogsData = [
    { id: 1, name: 'Adil' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'Artur' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Picasso' }
];
let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Ypo' },
    { id: 3, message: 'EWewewewe' }
];
let postsData = [
    { id: 1, post: 'Yo beach' },
    { id: 2, post: 'Hey Imma Rich' }
];

let dialogElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
let messageElements = messageData.map((m) => <Message message={m.message} id={m.id} />);
let postsElements = postsData.map((p) => <Post postex={p.post} id={p.id} />);


ReactDOM.render(<App
    /*АДИЛЬ САТИЕВ САМАТОВИЧ. Здесь пропсы данных*/
    names={dialogElements} messages={messageElements}
    profileData={postsElements}


/>, document.getElementById('root'));



serviceWorker.unregister();
