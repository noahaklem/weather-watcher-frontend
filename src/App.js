import React, { Component } from 'react';
import TodaysForecast from './components/TodaysForecast';
import TodaysDetails from './components/TodaysDetails';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='navigation'>
          {/* <Navigation /> */}
        </div>
        <div className='todays-forecast'>
          <TodaysForecast />
          <TodaysDetails />
        </div>
        <div className='future-forecast'>
          {/* <FutureForecast /> */}
        </div>
      </div>
    );
  }
}

export default App;