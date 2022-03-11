import { combineReducers } from "redux";

const rootReducer = combineReducers({
	showForm: showFormReducer,
	cities: addCity,
	forecasts: addForecast,
	requesting: false,
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





