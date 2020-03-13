import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNewMessage, addPost, updateNewPostText, addMessage } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
                addMessage={store.addMessage}
                addNewMessage={store.addNewMessage} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state.getState());
store.subscribe(rerenderEntireTree);

