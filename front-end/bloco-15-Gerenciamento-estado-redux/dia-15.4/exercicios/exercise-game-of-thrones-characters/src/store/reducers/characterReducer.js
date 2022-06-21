import { ERROR_CHARACTER, RECEIVE_CHARACTER, REQUEST_CHARACTER } from "../actions/ActionTypes";


const INITIAL_STATE = {
    isLoading: false,
    character: '',
};

export const characterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_CHARACTER:
            return {
                ...state,
                isLoading: true,
            };
        case RECEIVE_CHARACTER:
            return {
                ...state,
                isLoading: false,
                character: action.character[0],
            };
        case ERROR_CHARACTER:
            return {
                ...state,
                isLoading:false,
                error: action.error,
            };
        default:
            return state;
    }
}
