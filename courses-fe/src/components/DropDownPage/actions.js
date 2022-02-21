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

export const addSpecialWord = (specialWord) => {
  return {
    type: actionTypes.SPECIAL_WORD,
    specialWord
  }
}

export const addListWord = (listWord) => {
  return {
    type: actionTypes.LIST_WORD,
    listWord
  }
}

export const openModal = (text) => {
  return {
    type: actionTypes.OPEN_MODAL,
    text
  }
}

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}

export const increment = (count) => {
  return {
    type: actionTypes.INCREMENT,
    count
  }
}

export const decrement = (count) => {
  return {
    type: actionTypes.DECREMENT,
    count
  }
}