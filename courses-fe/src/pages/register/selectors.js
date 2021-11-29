import { createSelector } from "reselect";

const getCount = ({ register }) => register.count;

export const getModel = createSelector([getCount], (count) => {
  return {
    count,
  };
});
