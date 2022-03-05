import React from 'react';

const AddCity = ({onClick}) => (
  <div id='addcity-container'>
    <button className="button" onClick={ onClick }>
      +
    </button>
  </div>
 
);

export default AddCity;