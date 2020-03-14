const store = {
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
    rerenderEntireTree() {

    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,

        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state)
    },
    addNewMessage(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._rerenderEntireTree(this._state)
    }
}
export default store;
window.store = store;