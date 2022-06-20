import { combineReducers } from 'redux';
import { reducer, registerReducer } from './reducer';

const rootReducer = combineReducers({
    reducer,
    registerReducer, });

export default rootReducer;
