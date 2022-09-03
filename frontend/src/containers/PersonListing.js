import React, { useEffect } from "react";
import PersonComponent from "./PersonComponent";
import { useDispatch } from "react-redux";
import { setPersons } from "../redux/actions/personActions";
import axios from "axios";

const PersonListing = () => {

    const dispatch = useDispatch();
    const fetchPersons = async () => { 
        const response = await axios
        .get('http://127.0.0.1:8000/api/person/')
        .catch((err) => {
            console.log("Error", err);
        });
        dispatch(setPersons(response.data));
    };

    useEffect(() => {
        fetchPersons();
    }, []);
    
    return (
        <div className="ui grid container">
            <PersonComponent />
        </div>
    );
}

export default PersonListing;