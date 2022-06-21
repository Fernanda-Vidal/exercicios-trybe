import charAPI from "../../services/charAPI";
import { ERROR_CHARACTER, RECEIVE_CHARACTER, REQUEST_CHARACTER } from "./ActionTypes";

export const requestCharAPI = (searched) => ({
    type: REQUEST_CHARACTER,
    loading:true,
    searched,
});

export const receiveCharAPI = (character) => ({
    type:RECEIVE_CHARACTER,
    loading: false,
    character,
});

export const errorCharAPI = (error) => ({
    type: ERROR_CHARACTER,
    loading: false,
    error,
})
export const thunkCharacter = (name) => {
    return (dispatch) => {
       dispatch(requestCharAPI(name));
        return charAPI(name)
        .then(
            (character) => dispatch(receiveCharAPI(character)),
            (error) => dispatch(errorCharAPI(error.message)),
        )
    }
}