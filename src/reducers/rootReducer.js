import { combineReducers } from "redux";

const rootReducer = combineReducers({
	showForm: showFormReducer,
	cities: addCity,
	forecasts: addForecast,
	username: addUser,
});

export default rootReducer;

function showFormReducer( state = { showForm: true }, action) {
	
	switch (action.type) {
	  case 'SHOW_FORM':
		  return { showForm: !state.showForm};
  
	  default:
		  return state;
	}
	
}

function addCity (state = [], action) {

	switch (action.type) {
		case 'ADD_CITY':
			return [...state, action.city ]

		default:
			return state;
	}
}

function addForecast (
	state = { forecasts: [], requesting: false }, 
	action
) {
	switch (action.type) {
		case 'START_ADDING_FORECAST':
			return {
				...state,
				forecasts: [...state.forecasts],
				requesting: true,
			};

		case 'ADD_FORECAST':
			return {
				...state,
				forecasts: [...state.forecasts, action.forecast],
				requesting: false,
			};

		default:
			return state;
	}
}

function addUser (
	state = { username: '', isLoggedIn: false },
	action
) {
	switch (action.type) {
		case 'START_LOGGING_IN_USER':
			console.log("creating user")
			return {
				...state,
				username: state.username,
				isLoggedIn: false,
			};

		case 'LOGIN_USER':
			console.log('USER SHOULD BE LOGGED IN')
			return {
				...state,
				username: action.user.username,
				isLoggedIn: true,
				// forecasts: [...state.forecasts, action.user.forecasts]
			}
			

		default:
			return state;
	}
}





