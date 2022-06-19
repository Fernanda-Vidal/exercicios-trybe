import { NEW_ACTIONS } from "../actions";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_ACTIONS:
            return [...state, action.value]
        default:
            return state;
    }
}

export default reducer;