import { createSelector } from "reselect";

const getCats = ({ dashboard }) => dashboard.cats;
const getDogs = ({ dashboard }) => dashboard.dogs;

export const getModel = createSelector([getCats, getDogs], (cats, dogs) => {
  return {
    cats,
    dogs
  };
});