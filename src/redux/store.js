import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree(this._state);

    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
}

export default store;
window.store = store;