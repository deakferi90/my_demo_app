import * as actionTypes from './constants';

const initialState = {
  names: [],
  selectedValue: '',
  pairNumber: [],
  imPairNumber: [],
  specialWords: [],
  listWords: [],
  isModalOpen: false
}
const items = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_ITEM:
        return {...state, names: [...state.names, action.name]}
      case actionTypes.CREATE_LIST:
        return {...state, selectedValue: action.item}
      case actionTypes.DELETE_ITEM:
          return {...state, deleteListItem: action.removeItem}
      case actionTypes.ADD_PAIR:
        return {...state, pairNumber: [...state.pairNumber, action.pairNumber]}
        case actionTypes.ADD_IMPAIR:
          return {...state, imPairNumber: [...state.imPairNumber, action.imPairNumber]}
      default:
        return state;
    }
  };
  
  export default items;