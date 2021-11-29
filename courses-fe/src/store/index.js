import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { duck as registerReducer } from '../pages/register';
import { duck as loginReducer } from '../pages/login';

export const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    register: registerReducer,
    login: loginReducer
})

export default rootReducer;