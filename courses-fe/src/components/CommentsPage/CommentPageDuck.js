import * as actionTypes from './constants';

const comments = (state = [], action) => {
  console.log(state);
    switch (action.type) {
      case actionTypes.ADD_COMMENT:
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            date: action.date,
            comment: action.comment
          }
        ];
  
      case actionTypes.REMOVE_COMMENT:
        return state.filter(el => el.id !== action.payload.id);
  
      default:
        return state;
    }
  };
  
  export default comments;
  