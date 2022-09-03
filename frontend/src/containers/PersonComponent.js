import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PersonComponent = () => {
    const persons = useSelector((state) => state.allPersons.persons);
    console.log(persons);
    
    const columns = [
        { field: "id", headerName: "ID", width: 60, flex: 0.3 },
        { field: "first_name", headerName: "First name", width: 150, flex: 0.3 },
        { field: "last_name", headerName: "Last name", width: 150, flex: 0.3 },
        { field: "document_type", headerName: "Document type", width: 150, flex: 0.3 },
        { field: "document_number", headerName: "Document number", width: 150, flex: 0.3 },
        { field: "hobbie", headerName: "Hobbies", width: 150, flex: 0.3 },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div style={{display: "flex"}}>
                        <Link to={`person/edit/${params.row.id}`} style={{textDecoration: 'none'}}>
                            <Stack direction="row" spacing={2}>
                                <Button style={{margin: 5}} variant="outlined">Edit</Button>
                            </Stack>
                        </Link>
                        <Link to={`person/delete/${params.row.id}`} style={{textDecoration: 'none'}}>
                            <Stack direction="row" spacing={2}>
                                <Button style={{margin: 5}} variant="outlined" color="error">Delete</Button>
                            </Stack>
                        </Link>
                    </div>
                );
            },
        },
        
    ];

    return (
        <div>
            <div>
                <div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Stack direction="row" spacing={2}>
                            <Button >Home</Button>
                        </Stack>
                    </Link>
                    <Link to="person/add" style={{textDecoration: 'none'}}>
                        <Button variant="contained">Add Person</Button>
                    </Link>
                </div>
            </div>
            <div>
                <div style={{ height: 700, width: '100%' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            <DataGrid rows={persons} columns={columns} pageSize={5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PersonComponent;