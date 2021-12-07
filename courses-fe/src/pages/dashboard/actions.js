import * as actionTypes from "./constants";
import userApi from "../../api/UserApi";
import playTestApi from "../../api/PlayTestApi";

const logOutUserSuccess = () => {
  return { type: actionTypes.LOGOUT_USER };
};

const loadCatsSucces = (cats) => {
  return {type: actionTypes.LOAD_CATS_SUCCESS, cats};
}

const loadDogsSucces = (dogs) => {
  return {type: actionTypes.LOAD_DOGS_SUCCESS, dogs};
}

export const loadCats = () => {
  return (dispatch) => {
    playTestApi.getCats().then(res => {
      dispatch(loadCatsSucces(res.data.cats))
    }).catch(err => {
      console.log('A aparut o eroare si ar trebui sa te logam din nou');
      dispatch(loadCatsSucces([]))
    })
  }
}

export const loadDogs = () => {
  return (dispatch) => {
    playTestApi.getDogs().then(res => {
      dispatch(loadDogsSucces(res.data.dogs))
    }).catch(err => {
      console.log('A aparut o eroare si ar trebui sa te logam din nou');
      dispatch(loadDogsSucces([]))
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
