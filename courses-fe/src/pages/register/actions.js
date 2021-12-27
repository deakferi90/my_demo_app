import * as actionTypes from "./constants";
import userApi from '../../api/UserApi';

export const registerUserSucess = () => {
    return { type: actionTypes.REGISTER_USER };
}

export const registerUser = (userData, navigate) => {
  console.log(userData);
    return async (dispatch) => {
      try {
          const res = await userApi.register(userData);
          const { access_token, user } = res.data;
          localStorage.setItem('ACCESS_TOKEN', access_token);
          localStorage.setItem('USER', user);
          dispatch(registerUserSucess());
          navigate('/login');
          //TO DO - notification for succes
      }catch(err) {
        // TO DO - notification for error
      }
    }
}