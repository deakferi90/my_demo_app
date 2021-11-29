import { createSelector } from "reselect";

const getCount = ({ login }) => login.count;

export const getModel = createSelector([getCount], (count) => {
  return {
    count,
  };
});