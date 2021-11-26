const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state
        case 'DECREMENT':
            return state
        default:
            return state;
    }
}

export default loggedReducer;