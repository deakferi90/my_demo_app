import * as actionTypes from "./constants";

const initialState = {
  count: 0,
  isUserLoggedIn: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_LOGIN:
      return { ...state, count: state.count + 2 };
    case actionTypes.DECREMENT_LOGIN:
      return { ...state, count: state.count - 2 };
    case actionTypes.LOGIN_USER:
      return {...state, isUserLoggedIn: true};
    case actionTypes.LOGOUT_USER: 
      return {...state, isUserLoggedIn: false};  
    default:
      return state;
  }
}