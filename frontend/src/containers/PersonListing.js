import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonComponent from "./PersonComponent";
import { useDispatch } from "react-redux";
import { setPersons } from "../redux/actions/personActions";
import axios from "axios";

const PersonListing = () => {

    const persons = useSelector((state) => state);
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "first_name", headerName: "First name", width: 150 },
        { field: "last_name", headerName: "Last name", width: 150 },
        { field: "document_type", headerName: "Document type", width: 150 },
        { field: "document_number", headerName: "Document number", width: 150 },
        { field: "hobbies", headerName: "Hobbies", width: 150 },
    ];
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