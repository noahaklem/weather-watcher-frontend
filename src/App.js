import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='navigation'>
          <p>navigation</p>
        </div>
        <div className='todays-forecast'>
          <p>todays weather</p>
        </div>
        <div className='future-forecast'>
          <p>weather info</p>
        </div>
      </div>
    );
  }
}

export default App;