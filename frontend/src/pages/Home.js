import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { fetchPersons } from '../redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { deletePerson } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPersons())
    }, [])

    let navigate = useNavigate()
    const { persons } = useSelector(state => state.data)

    const handleDelete = (id) => {
      if(window.confirm("Are you sure you want to delete this person?")){
          dispatch(deletePerson(id))
      }
    }

    return (
        <div>
          <div style={{margin: 10}}>
            <Button color="primary" variant="contained" onClick={() => navigate("/addPerson")}>Add person</Button>
          </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center">First Name</StyledTableCell>
                        <StyledTableCell align="center">Last Name</StyledTableCell>
                        <StyledTableCell align="center">Document type</StyledTableCell>
                        <StyledTableCell align="center">Document number</StyledTableCell>
                        <StyledTableCell align="center">Hobbies</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {persons && persons.map((person) => (
                        <StyledTableRow key={person.id}>
                          <StyledTableCell component="th" scope="row">
                            {person.id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {person.first_name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{person.last_name}</StyledTableCell>
                        <StyledTableCell align="center">{person.document_type}</StyledTableCell>
                        <StyledTableCell align="center">{person.document_number}</StyledTableCell>
                        <StyledTableCell align="center">{person.hobbie}</StyledTableCell>
                        <StyledTableCell align="center">
                        <ButtonGroup variant="contained"  aria-label="text button group">
                          <Button style={{marginRight: "5px"}} color="primary">Edit</Button>
                          <Button onClick={() => handleDelete(person.id)}  color="error">Delete</Button>
                        </ButtonGroup>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Home;
