import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='todays-forecast'>
          {/* <todaysForecast /> */}
        </div>
        <div className='future-forecast'>
          {/* <futureForecast /> */}
        </div>
      </div>
    );
  }
}

export default App;