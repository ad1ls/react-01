let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Naruto best', likesCount: 2 },
                { id: 2, message: 'Sasuke best ttt', likesCount: 1 }
            ],
            newPostText: 'KAVO'
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
            newMessageText: 'Smth'
        },
        sidebar: {}
    },
    getState() {
        debugger;
        return this._state;
    },
    _rerenderEntireTree() {

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._rerenderEntireTree(this._state)
        }

    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const onPostChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

export default store;
window.store = store;