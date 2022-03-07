import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/presentational/Login';
import SignUp from './components/presentational/SignUp';


ReactDOM.render(
  <Router>
    <Route exact path='/login' component={ Login } />
    <Route exact path='/signup' component={ SignUp} />
    <Route exact path='/' component={ App } />
  </Router>,
  document.getElementById('root')
);

