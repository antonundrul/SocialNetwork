let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
// window.store=store;