import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Naruto best', likesCount: 2 },
            { id: 2, message: 'Sasuke best ttt', likesCount: 1 }
        ],
        newPostText : 'KAVO'
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
        ]
    },
    sidebar: {}
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;