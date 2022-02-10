import * as actionTypes from './constants';
export const addItemAction = (name) => {
  return {
    type: actionTypes.ADD_ITEM,
    name
  };
};

export const setSelectedValue = (item) => {
  return {
    type:actionTypes.CREATE_LIST,
    item
  }
}

export const removeItemAction = (removeItem) => {
  return {
    type:actionTypes.DELETE_ITEM,
    removeItem
  }
}

export const addPairNumber = (pairNumber) => {
  return {
    type:actionTypes.ADD_PAIR,
    pairNumber
  }
}

export const addImPairNumber = (imPairNumber) => {
  return {
    type:actionTypes.ADD_IMPAIR,
    imPairNumber
  }
}