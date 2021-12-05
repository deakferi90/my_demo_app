import * as actionTypes from "./constants";
import userApi from "../../api/UserApi";
import playTestApi from "../../api/PlayTestApi";

const logOutUserSuccess = () => {
  return { type: actionTypes.LOGOUT_USER };
};

const loadCatsSucces = (cats) => {
  return {type: actionTypes.LOAD_CATS_SUCCESS, cats};
}

export const loadCats = () => {
  return (dispatch) => {
    playTestApi.gerCats().then(res => {
      dispatch(loadCatsSucces(res.data.cats))
    }).catch(err => {
      console.log('A aparut o eraore si arr trebui sa te logam din nou');
      dispatch(loadCatsSucces([]))
    })
  }
}

export const logOutUser = (navigate) => {
  return async (dispatch) => {
    await userApi
      .logout()
      .then((res) => {
        localStorage.removeItem('USER');
        localStorage.removeItem('ACCESS_TOKEN');
        navigate("/");
        dispatch(logOutUserSuccess());
      })
      .catch((err) => {
        localStorage.removeItem('USER');
        localStorage.removeItem('ACCESS_TOKEN');
        navigate("/");
        dispatch(logOutUserSuccess());
      });
  };
};
