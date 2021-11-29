import * as actionTypes from "./constants";

export const increment = () => {
    return {type: actionTypes.INCREMENT_REGISTER};
}

export const decrement =() => {
    return {type: actionTypes.DECREMENT_REGISTER};
}