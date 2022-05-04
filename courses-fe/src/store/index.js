import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { duck as registerReducer } from "../pages/register";
import { duck as loginReducer } from "../pages/login";
import { duck as dashboardReducer } from "../pages/dashboard";
import { duck as commentReducer } from '../components/CommentsPage';
import { duck as dropdownReducer } from '../components/DropDownPage';
import { duck as detailsPageReducer } from '../components/DetailsPage';

export const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  register: registerReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
  comments: commentReducer,
  dropdown: dropdownReducer,
  details: detailsPageReducer
});

export default rootReducer;
