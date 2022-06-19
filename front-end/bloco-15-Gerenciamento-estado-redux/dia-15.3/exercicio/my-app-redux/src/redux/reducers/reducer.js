import { LOGIN_SAVED } from "../actions";

const INITIAL_STATE = {
    email: '',
    password: '',
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SAVED:
            return {
                ...state,
                ...action.payload,      
            } 
        default:
            return state;
    }
}

export default reducer;