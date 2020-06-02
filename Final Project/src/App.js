import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grocery from './grocery';
import Login from './login';
import Fruits from './fruits';
import {Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <div>
      {/* <Nav className="justify-content-center" activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav.Item>
  </Nav> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Grocery />
          </Route>
          <Route path="/fruits">
            <Fruits />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
