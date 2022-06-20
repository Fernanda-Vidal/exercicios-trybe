import { LOGIN_SAVED, REGISTER } from "../actions";

const INITIAL_STATE = {}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SAVED:
            return action.value;
        case REGISTER:
            return action.value;
        default:
            return state;
    }
}

export default reducer;