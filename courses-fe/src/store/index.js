import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { duck as registerReducer } from '../pages/register';

export const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    register: registerReducer
})

export default rootReducer;