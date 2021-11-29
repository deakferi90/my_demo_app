import * as actionTypes from "./constants";

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_LOGIN:
      return { ...state, count: state.count + 2 };
    case actionTypes.DECREMENT_LOGIN:
      return { ...state, count: state.count - 2 };
    default:
      return state;
  }
}