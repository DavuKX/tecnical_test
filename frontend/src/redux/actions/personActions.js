import { ActionTypes } from "../constants/action-types";

export const setPersons = (persons) => {
    return {
        type: ActionTypes.SET_PERSONS,
        payload: persons,
    };
};

export const selectedPerson = (person) => {
    return {
        type: ActionTypes.SELECTED_PERSON,
        payload: person,
    };
};

export const removeSelectedPerson = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PERSON,
    };
};