import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

// stylesheet
import './index.css';

// Components
import App from './App'
import SignUp from './components/presentational/SignUp';
import Login from './components/presentational/Login';

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
    <Route exact path='/login' render={() => 
      <Provider store={ store }>
        < Login />
      </Provider>}
    />
    <Route exact path='/signup' render={() =>
      <Provider store={ store }>
        < SignUp />
      </Provider>}
    />
    <Route exact path='/' render={() =>
      <Provider store={ store }>
        <App /> 
      </Provider>} 
    />
  </Router>,
  document.getElementById('root')
);

