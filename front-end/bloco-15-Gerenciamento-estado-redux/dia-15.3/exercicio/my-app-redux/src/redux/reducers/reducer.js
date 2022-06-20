import { DELETE, LOGIN_SAVED, REGISTER } from "../actions";

const INITIAL_STATE = {}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SAVED:
            return action.value;
        default:
            return state;
    }
}

export const registerReducer = (state = [], action) => {
    switch (action.type) {
        case REGISTER:
            return [...state, action.value];
        case DELETE:
            return state.filter((register) => register !== action.value)
        default:
            return state;
    }

}
