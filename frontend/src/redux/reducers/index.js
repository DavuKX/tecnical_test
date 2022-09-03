import { combineReducers } from 'redux';
import { PersonReducer, selectedPersonReducer } from './personReducer';

export const reducers = combineReducers({
    allPersons: PersonReducer,
    person: selectedPersonReducer,
});

export default reducers;