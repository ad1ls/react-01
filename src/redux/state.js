import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Naruto best', likesCount: 2 },
                { id: 2, message: 'Sasuke best ttt', likesCount: 1 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Adil' },
                { id: 2, name: 'Ali' },
                { id: 3, name: 'Artur' },
                { id: 4, name: 'Ivan' },
                { id: 5, name: 'Alina' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Ypo' },
                { id: 3, message: 'EWewewewe' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {

    },
    dispatch(action) {

    profileReducer(this._state.profilePage, action)
    dialogsReducer()

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageBody,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._rerenderEntireTree(this._state);

        } else if (action.type === ADD_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._rerenderEntireTree(this._state);
        }

    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const onPostChangeActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })
export const onMessageChangeActionCreator = (text) => ({ type: 'ADD-NEW-MESSAGE', body: text })

export default store;
window.store = store;