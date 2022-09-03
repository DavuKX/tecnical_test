import { ActionTypes } from "../constants/action-types";

const initialState = {
    persons:[{
        id: 1,
        first_name: "John",
        last_name: "Doe",
        hobbies: "Reading",
        document_type: "CC",
        document_number: "123456789",
    }], 
};

export const PersonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PERSONS:
            return state;
        default:
            return state;
    }
}