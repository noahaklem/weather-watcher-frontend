import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

// stylesheet
import './index.css';

// Components
import App from './App'
import Login from './components/presentational/Login';
import SignUp from './components/presentational/SignUp';

// redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

// thunk
import thunk from "redux-thunk"; 

// reducers
import rootReducer from './reducers/rootReducer';

const middlewareEnhancer = applyMiddleware(thunk)

const store = createStore(rootReducer, middlewareEnhancer);

ReactDOM.render(
  <Router>
    <Route exact path='/login' component={ Login } />
    <Route exact path='/signup' component={ SignUp} />
    <Route exact path='/' render={() =>
      <Provider store={ store }>
        <App /> 
      </Provider>} 
    />
  </Router>,
  document.getElementById('root')
);

