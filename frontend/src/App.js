import './App.css';
import axios from 'axios';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Create from '.routes/create';

const url = 'http://127.0.0.1:8000/api/person/';

class App extends React.Component {

  state = {
    persons: [],
  };

  getPetition = () => {
    axios.get(url)
      .then(res => {
        this.setState({persons: res.data});
      }).catch(error => {
        console.log(error);
      }
    );
  }

  componentDidMount() {
    this.getPetition();
  }

  render() {
    return (
      <div className="App">
        <br/>
        <button path="create" element={<create/>}>Agregar</button>
        <br/><br/>
        <table>
          <thead>
            <tr>
              <th>Tipo de documento</th>
              <th>Numero de documento</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => (
              <tr key={person.id}>
                <td>{person.document_type}</td>
                <td>{person.document_number}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.hobbie}</td>
                <yd>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </yd>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};


export default App;
