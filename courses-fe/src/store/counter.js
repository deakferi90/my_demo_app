const counterReducer = (state = {counter:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.counter + 1
            };
        case 'DECREMENT':
            return {
                count: state.counter - 1
            };
        default:
            return state;
    }
}

export default counterReducer;