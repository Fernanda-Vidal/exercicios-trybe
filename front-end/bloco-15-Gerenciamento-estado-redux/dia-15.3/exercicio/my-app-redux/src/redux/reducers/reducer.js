import { LOGIN_SAVED } from "../actions";

const INITIAL_STATE = {}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SAVED:
            return action.value;
        default:
            return state;
    }
}

export default reducer;