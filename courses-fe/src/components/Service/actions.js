import * as actionTypes from './constants';
export const addItemAction = (text) => {
  return {
    type: actionTypes.ADD_ITEM,
    text
  };
};
