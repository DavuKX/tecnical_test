import * as types from './actionType';

const initialState = {
    persons: [],
    person: {},
    loading: false,
};

const personsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSONS:
            return {
                ...state,
                persons: action.payload,
                loading: false
            };
        case types.DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.payload),
                loading: false
            };
        case types.ADD_PERSON:
            return {
                ...state,
                persons: [...state.persons, action.payload],
                loading: false
            };
        default:
            return state;
    }
};

export default personsReducers;