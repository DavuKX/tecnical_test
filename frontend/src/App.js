import './App.css';
import React, {useEffect} from 'react';


function App() {
  
  const url = 'http://127.0.0.1:8000/api/person/';
  const [persons, setPersons] = React.useState([]);

  // get data from api
  const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPersons(data);
  return data;
}

  useEffect(() => {
    fetchData() 
  }, [])
  
  return (
    <div className="App">
      <tr>
        <th>Tipo de documento</th>
        <th>Numero de documento</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Hobby</th>
      </tr>
      <ul>
        { !persons ? <h1>Loading...</h1> : 
        persons.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.document_type}</td>
                <td>{person.document_number}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.hobbie}</td>
              </tr>
            )
          })
        }    
      </ul>
    </div>
  );
}

export default App;
