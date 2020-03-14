import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import { addNewMessage, addPost, updateNewPostText, addMessage } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind{store}}
                updateNewPostText={store.updateNewPostTextind{store}}
                addMessage={store.addMessageind{store}}
                addNewMessage={store.addNewMessageind{store}} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

