import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonListing from './containers/PersonListing';
import PersonDetail from './containers/PersonDetail';
import PersonEdit from './containers/PersonEdit';
import PersonDelete from './containers/PersonDelete';

const url = 'http://127.0.0.1:8000/api/person/';

function App() {
    return (
        <div className="App">
            <Router>
              <Routes>
                <Route exact path="/" element={<PersonListing/>} />
                <Route exact path="/person/:id" element={<PersonDetail/>} />
                <Route exact path="/person/edit/:id" element={<PersonEdit/>} />
                <Route exact path="/person/delete/:id" element={<PersonDelete/>} />
                <Route>404 Not Found!</Route>
              </Routes>
            </Router>
        </div>
      );
};

export default App;
