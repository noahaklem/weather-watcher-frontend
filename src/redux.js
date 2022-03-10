// build my own redux notes 
// action, reducer, new state

// declaring our initial state up top is not ideal because normally we would look to a reducer
// to manage our state
// so we set up a default arguement in our reducer (see reducer args)
// let state = {count: 0}

let state;
// function responsible for changing state with an action is called a reducer
// this is a reducer function
// these can be in seperate files then combined to make one rootReducer with the help of redux
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count : state.count + 1};

    default:
      return state;
  }
}
// action always has a type and is an object so action = { type: 'INCREASE_COUNT' }
// this is passed into the changeState function which 
// uses a switch statement to compare our action.types

function dispatch(action) {
  state = changeState(state, action);
  render();
}

// once the state is updated we need a way to render it to the page
// creating a render function to do this below
function render() {
  document.body.textContent = state.count;
}
// then you have to call render but at the end is not the best place
// our state only changes when we call the dispatch function 
// so we include that render call as the last line in our dispatch function
// function dispatch(action) {
//   state = changeState(state, action);
//   render();
// }

// we need a way to start our initial state so we call a dispatch statement to start it
// the dispatch action type can be anything that does not execute and action
// ex: would be below or dispatch({ type: "beef" }) does the same thing as below
dispatch({ type: '@@INIT' })


// now usually we want to add a dispatch function to a event listener on the page
let button = document.getElementById('button');

button.addEventListener('click', () => {
  // calling the dispatch function inside of an event listener
  // with an action object as and arg, which is our action that has a type
  dispatch({type: 'INCREASE_COUNT'})
})

// with all this code we need to make it reusable so we start by building a function


// Making code reusable: creating a store

// since our reducers are particular to the application 
// we need a way to make a call to the reducer in when the dispatch function is called
// so we pass our specific reducer as an argument in our createStore function
function createStore(reducer) {
  // we take our state variable and make it local to this function
  // this stops from reassignment which we could do if the variable was global
  let state;

  // now we need to move only the code that is resuable in all of our applications
  // the dispatch function goes through this flow for us because it calls our reducer function
  // so this function goes inside this function
  function dispatch(action){
    // reducer would be equal to our changeState above
    store = reducer(state, action);
    render();
  }

  // we need a method to retrieve data from the store
  function getState() {
    return state;
  }

  // this exposes the dispatch method to the app
  // this is called the store
  // we also need to add getState to the return object (store) so we can access the state in our app
  return { dispatch, getState }
}

// we set up our reducer to because it is application specific
function reducer(state = { count: 0 }, action) {
  switch(action.type){
    case 'INCREASE_COUNT':
      return {count: state.count + 1 };
    
      default:
        return state;
  }
}

//to use our new store we need to save it in a variable
let store = createStore(reducer);

// because our createStore() returns and object with our dispatch method
// we have access to the dispatch method inside our store
store.dispatch({ type: '@@INIT' })

//  now we cand update our render to 
function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
}
// now we can update our event listener dispatch to
let button = document.getElementById("button");

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT'});
})



