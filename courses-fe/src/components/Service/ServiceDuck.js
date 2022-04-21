import * as actionTypes from './constants';

const initialState = {
  text: ''
}
const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return { ...state, text: action.text }
    default:
      return state;
  }
};

export default items;
