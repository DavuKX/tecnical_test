import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

const PersonComponent = () => {
    const persons = useSelector((state) => state.allPersons.persons);
    console.log(persons);
    
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "first_name", headerName: "First name", width: 150 },
        { field: "last_name", headerName: "Last name", width: 150 },
        { field: "document_type", headerName: "Document type", width: 150 },
        { field: "document_number", headerName: "Document number", width: 150 },
        { field: "hobbie", headerName: "Hobbies", width: 150 },
    ];

    return (
        <div className="ui grid container">
            <div className="ui row">
                <div className="column eight wide">
                    <Link to="/add">
                        <button className="ui button blue right">Add Person</button>
                    </Link>
                </div>
            </div>
            <div className="ui row">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={persons} columns={columns} pageSize={5} checkboxSelection />
                </div>
            </div>
        </div>
    );
};


export default PersonComponent;