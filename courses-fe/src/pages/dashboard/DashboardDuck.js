import * as actionTypes from './constants';

const initialState = {
    cats: [],
    dogs: []
};

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.LOAD_CATS_SUCCESS:
            return {...state, cats: [...action.cats]}
        case actionTypes.LOAD_DOGS_SUCCESS:
            return {...state, dogs: [...action.dogs]}
        default:
            return state;
    }
}