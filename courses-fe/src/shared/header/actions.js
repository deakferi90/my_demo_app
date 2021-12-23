import * as actionTypes from "./constants";
import userApi from "../../api/UserApi";

const logOutUserSuccess = () => {
    return { type: actionTypes.LOGOUT_USER };
  };

export const logOutUser = (navigate) => {
    return async (dispatch) => {
      await userApi
        .logout()
        .then((res) => {
          localStorage.removeItem('USER');
          localStorage.removeItem('ACCESS_TOKEN');
          navigate("/login");
          dispatch(logOutUserSuccess());
        })
        .catch((err) => {
          localStorage.removeItem('USER');
          localStorage.removeItem('ACCESS_TOKEN');
          navigate("/login");
          dispatch(logOutUserSuccess());
        });
    };
  };