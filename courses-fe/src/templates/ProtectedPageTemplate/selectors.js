import { createSelector } from "reselect";

const getLoginStatus = ({ login }) => login.isUserLoggedIn;

export const getModel = createSelector([getLoginStatus], (loginStatus) => {
  return {
    loginStatus,
  };
});