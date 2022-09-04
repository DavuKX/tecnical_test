import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPerson } from '../redux/actions';

const AddPerson = () => {

    const [error, setError] = useState("")

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        document_type: "",
        document_number: "",
        hobbie: "",

    })

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const { first_name, last_name, document_type, document_number, hobbie } = state;

    const handleChange = (e) => {
        let { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!first_name || !last_name || !document_type || !document_number || !hobbie) {
            setError("Please fill all the fields")
        } else {
            dispatch(addPerson(state))
            navigate("/")
            setError("")
        }
    }

    return (
        <div>
            <h2>Add person</h2>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: 5}}>
                <p>Please fill the following form</p>
                <Button color="secondary" variant="contained" type="submit" onClick={() => navigate('/')}>Go back</Button>            
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                
                <TextField style={{margin: 5}} id="outlined-basic" label="First Name" variant="outlined" value={first_name} onChange={handleChange} name="first_name"/>
                <TextField style={{margin: 5}} id="outlined-basic" label="Last Name" variant="outlined" value={last_name} onChange={handleChange} name="last_name"/>
                <FormControl style={{margin: 5}} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Document type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={document_type}
                        name="document_type"
                        label="Document type"
                        onChange={handleChange}
                    >
                        <MenuItem value={'CC'}>Cedula de ciudadania</MenuItem>
                        <MenuItem value={'CE'}>Cedula de extranjeria</MenuItem>
                        <MenuItem value={'TI'}>Tarjeta de identidad</MenuItem>
                        <MenuItem value={'RC'}>Registro civil</MenuItem>
                    </Select>
                </FormControl>
                <TextField style={{margin: 5}} id="outlined-basic" label="Document number" variant="outlined" value={document_number} onChange={handleChange} name="document_number"/>
                <TextField style={{margin: 5}} id="outlined-basic" label="Hobbie" variant="outlined" value={hobbie} onChange={handleChange} name="hobbie"/>
            <div style={{margin: 10}}>
                <Button color="primary" variant="contained" type="submit">Submit</Button>
            </div>
            </form>
        </div>
    );
};

export default AddPerson;