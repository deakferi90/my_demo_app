import * as actionTypes from "./constants";

export const increment = () => {
    return {type: actionTypes.INCREMENT_LOGIN};
}

export const decrement = () => {
    return {type: actionTypes.DECREMENT_LOGIN};
}