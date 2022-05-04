import * as actionTypes from './constants';

const details = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD_COMMENTS:
        return [
          ...state,
          {
            name: action.name,
            comment: action.comment
          }
        ];
      default:
        return state;
    }
  };
  
  export default details;
  