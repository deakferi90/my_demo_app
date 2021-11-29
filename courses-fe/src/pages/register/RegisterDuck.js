import * as actionTypes from "./constants";

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_REGISTER:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT_REGISTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
