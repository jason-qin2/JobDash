import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Landing from './Components/Landing'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'
import Jobs from './Components/Jobs'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/*<App />*/}
    <NavBar/>
    <Switch>
          <Route path="/Home">
            <Landing />
          </Route>=
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route path="/Jobs">
            <Jobs/>
          </Route>

          <Route path="/Users">
            <h2>Users</h2>
          </Route>

          <Route path="/">
            <Landing />
          </Route>
          
        </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
