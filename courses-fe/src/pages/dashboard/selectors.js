import { createSelector } from "reselect";

const getCats = ({ dashboard }) => dashboard.cats;

export const getModel = createSelector([getCats], (cats) => {
  return {
    cats,
  };
});