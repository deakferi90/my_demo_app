import * as actionTypes from "./constants";
import userApi from '../../api/UserApi';

export const increment = () => {
    return {type: actionTypes.INCREMENT_REGISTER};
}

export const decrement = () => {
    return {type: actionTypes.DECREMENT_REGISTER};
}

export const register = () => {
    return {type: actionTypes.REGISTER};
}

export const loginUserSucces = () => {
    return {type: actionTypes.LOGIN_USER};
  }

export const registerUser = (userData, navigate) => {
    return async (dispatch) => {
      try {
          const res = await userApi.register(userData);
          console.log(res.data);
          //TO DO - notification for succes
      }catch(err) {
        // TO DO - notification for error
      }
    }
}