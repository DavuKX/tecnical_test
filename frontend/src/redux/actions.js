import * as types from './actionType';
import axios from 'axios';

const getPersons = (persons) => ({
    type: types.GET_PERSONS,
    payload: persons
});

const personDeleted = (id) => ({
    type: types.DELETE_PERSON,
    payload: id
});

const personAdded = (person) => ({
    type: types.ADD_PERSON,
    payload: person
});

export const fetchPersons = () => {
    return function (dispatch) {
        return axios.get(`http://localhost:8000/api/person`)
            .then(response => {
                dispatch(getPersons(response.data));
            })
            .catch(error => {
                throw(error);
            });
    }
};

export const deletePerson = (id) => {
    return function (dispatch) {
        return axios.delete(`http://localhost:8000/api/person/${id}`)
            .then(response => {
                dispatch(personDeleted());
                dispatch(fetchPersons());
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const addPerson = (person) => {
    return function (dispatch) {
        return axios.post(`http://localhost:8000/api/person/`, person)
            .then(response => {
                dispatch(personAdded());
            })
            .catch(error => {
                throw(error);
            });
    }
}
