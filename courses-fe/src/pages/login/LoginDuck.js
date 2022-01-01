import * as actionTypes from "./constants";

const initialState = {
  isUserLoggedIn: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {...state, isUserLoggedIn: true};
    case actionTypes.LOGOUT_USER: 
      return {...state, isUserLoggedIn: false};  
    default:
      return state;
  }
}