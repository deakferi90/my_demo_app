import * as actionTypes from './constants';
export const addComment = (name, date, comment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    id: new Date().getTime(),
    name,
    date,
    comment
  };
};

export const removeComment = (id) => {
  return {
    type: actionTypes.REMOVE_COMMENT,
    payload: { id }
  };
};
