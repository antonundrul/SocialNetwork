import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'How are you?', likesCount: 10}
    ]
}

test('new post should be added', () => {
    // 1. test data
    let action = addPost("this is a new post from a profile reducer test")

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expected result
    expect(newState.posts.length).toBe(3)
});

test('new post message should be correct', () => {
    // 1. test data
    let action = addPost("this is a new post from a profile reducer test")

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expected result
    expect(newState.posts[2].message).toBe("this is a new post from a profile reducer test")
});

test('length of posts should decrement after deleting post', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expected result
    expect(newState.posts.length).toBe(1)
});

test(`length of posts shouldn't decrement after deleting if postId is incorrect`, () => {
    // 1. test data
    let action = deletePost(8)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expected result
    expect(newState.posts.length).toBe(2)
});
