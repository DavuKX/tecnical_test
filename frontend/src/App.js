import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import PersonListing from './containers/PersonListing';
import PersonDetail from './containers/PersonDetail';

const url = 'http://127.0.0.1:8000/api/person/';

function App() {
    return (
        <div className="App">
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={PersonListing} />
                <Route path="/person/:id" component={PersonDetail} />
                <Route>404 Not Found!</Route>
              </Switch>
            </Router>
            <h1>Hello</h1>
        </div>
      );
};

export default App;
