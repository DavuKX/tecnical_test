import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import PersonListing from './containers/PersonListing';
import PersonDetail from './containers/PersonDetail';

const url = 'http://127.0.0.1:8000/api/person/';

function App() {
    return (
        <div className="App">
            <Router>
              <Header />
              <Routes>
                <Route exact path="/" element={<PersonListing/>} />
                <Route exact path="/person/:id" element={<PersonDetail/>} />
                <Route>404 Not Found!</Route>
              </Routes>
            </Router>
        </div>
      );
};

export default App;
