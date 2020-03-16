const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMessageBody,
        };
        state.messages.push(newMessage);
        state.newMessageBody = '';

    } else if (action.type === ADD_NEW_MESSAGE) {
        state.newMessageBody = action.body;
    }
    return (
        state
    )
}
export default dialogsReducer;