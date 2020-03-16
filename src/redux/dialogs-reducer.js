const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.type === ADD_MESSAGE) {
                let newMessage = {
                    id: 4,
                    message: state.newMessageBody,
                };
                state.messages.push(newMessage);
                state.newMessageBody = '';
                return state;
            }
        case ADD_NEW_MESSAGE:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
    export default dialogsReducer;