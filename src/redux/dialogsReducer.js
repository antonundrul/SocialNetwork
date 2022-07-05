const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage})

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'}
    ],
    messages: [
        {id: 1, message: 'Message1'},
        {id: 2, message: 'Message2'},
        {id: 3, message: 'Message3'},
        {id: 4, message: 'Message4'},
        {id: 5, message: 'Message5'}
    ],
    newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
            newMessageText: action.newMessage
            }
        }
        default:
            return state;

    }
}

export default dialogsReducer;