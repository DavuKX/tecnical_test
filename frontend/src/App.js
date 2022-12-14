import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import AddPerson from './pages/AddPerson';
import EditPerson from './pages/EditPerson';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addPerson" element={<AddPerson/>} />
        <Route exact path="/editPerson/:id" element={<EditPerson/>} />
      </Routes>
    </div>
  );
}

export default App;
