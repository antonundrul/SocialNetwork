let rerenderEntireTree = () => {
    console.log('state is changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first post", likesCount: 23},
            {id: 2, message: "How are you?", likesCount: 10}
        ],
        newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "User1"},
            {id: 2, name: "User2"},
            {id: 3, name: "User3"},
            {id: 4, name: "User4"},
            {id: 5, name: "User5"}
        ],
        messages: [
            {id: 1, message: "Message1"},
            {id: 2, message: "Message2"},
            {id: 3, message: "Message3"},
            {id: 4, message: "Message4"},
            {id: 5, message: "Message5"}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Friend1"},
            {id: 2, name: "Friend2"},
            {id: 3, name: "Friend3"}
        ]
    }
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;