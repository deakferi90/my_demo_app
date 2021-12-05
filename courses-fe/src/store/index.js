import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { duck as registerReducer } from "../pages/register";
import { duck as loginReducer } from "../pages/login";
import { duck as dashboardReducer } from "../pages/dashboard";

export const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  register: registerReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
