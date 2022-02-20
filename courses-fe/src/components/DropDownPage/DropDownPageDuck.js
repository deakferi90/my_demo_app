import * as actionTypes from './constants';

const initialState = {
  names: [],
  selectedValue: '',
  pairNumber: [],
  imPairNumber: [],
  specialWords: [],
  listWords: [],
  isModalOpen: false,
  modalText: '',
  counter: 0
}
const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return { ...state, names: [...state.names, action.name] }
    case actionTypes.CREATE_LIST:
      return { ...state, selectedValue: action.item }
    case actionTypes.DELETE_ITEM:
      return { ...state, deleteListItem: action.removeItem }
    case actionTypes.ADD_PAIR:
      return { ...state, pairNumber: [...state.pairNumber, action.pairNumber] }
    case actionTypes.ADD_IMPAIR:
      return { ...state, imPairNumber: [...state.imPairNumber, action.imPairNumber] }
    case actionTypes.SPECIAL_WORD:
      return { ...state, specialWords: [...state.specialWords, action.specialWord] }
    case actionTypes.LIST_WORD:
      return { ...state, listWords: [...state.listWords, action.listWord] }
    case actionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, modalText: action.text }
    case actionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false }
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state;
  }
};

export default items;