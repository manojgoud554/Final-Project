import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from'./login';
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
    <Switch>
    <Route path="/" component={App}>

    </Route>
    <Route 
            path="/login" component={Login}></Route>
    </Switch>
    </BrowserRouter> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
