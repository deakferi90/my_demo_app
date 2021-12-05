import * as actionTypes from './constants';

const initialState = {
    cats: []
};

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.LOAD_CATS_SUCCESS:
            return {...state, cats: [...action.cats]}
        default:
            return state;
    }
}