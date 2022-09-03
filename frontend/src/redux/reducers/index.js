import { combineReducers } from 'redux';
import { PersonReducer } from './personReducer';

export const reducers = combineReducers({
    allPersons: PersonReducer,
});

export default reducers;