import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Components/Landing'
import NavBar from './Components/NavBar'
import About from './Components/About'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Landing />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <h2>Users</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Landing></Landing>
}

function AboutPage() {
  return <About></About>;
}

function Users() {
  return <h2>Users</h2>;
}