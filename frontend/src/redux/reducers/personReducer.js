import { ActionTypes } from "../constants/action-types";

const initialState = {
    persons:[], 
};

export const PersonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PERSONS:
            return {...state, persons: payload};
        default:
            return state;
    }
}

export const selectedPersonReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PERSON:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PERSON:
            return {};
        default:
            return state;
    }
}