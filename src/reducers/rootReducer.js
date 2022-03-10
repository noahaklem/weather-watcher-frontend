import { combineReducers } from "redux";

const rootReducer = combineReducers({
	showForm: showFormReducer,
	cities: addCity,
	forecasts: addForecast
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
			console.log(state.cities)
			return [...state, action.city ]

		default:
			return state;
	}
}

function addForecast (state = [], action) {
	
	switch (action.type) {
		case 'ADD_FORECAST':
			return [...state, action.city]

		default:
			return state;
	}
}





