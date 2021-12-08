import * as actionTypes from "./constants";
import userApi from '../../api/UserApi';

export const increment = () => {
    return {type: actionTypes.INCREMENT_LOGIN};
}

export const decrement = () => {
    return {type: actionTypes.DECREMENT_LOGIN};
}

export const loginUserSucces = () => {
  return {type: actionTypes.LOGIN_USER};
}

export const  loginUser = (credentials, navigate) => {
    return async (dispatch) => {
      try {
          const res = await userApi.login(credentials);
          const { access_token, user } = res.data;
          localStorage.setItem('ACCESS_TOKEN', access_token);
          localStorage.setItem('USER', user);
          dispatch(loginUserSucces())
          navigate('/highchart');
          //TO DO - notification for succes
      }catch(err) {
        // TO DO - notification for error
      }
    }
}