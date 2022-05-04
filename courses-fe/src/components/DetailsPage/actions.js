import * as actionTypes from './constants';
export const addComments = (name, comment) => {
  return {
    type: actionTypes.ADD_COMMENTS,
    name,
    comment
  };
};