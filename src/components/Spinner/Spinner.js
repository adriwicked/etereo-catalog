import React from 'react';

import './Spinner.css'

class Spinner extends React.Component {
  render() {    
    return (
      <div className="spinner-container">
        <img
          className="spinner"
          src="https://pbs.twimg.com/profile_images/1107643598005305344/XqXTQc15_400x400.png"
          alt="img" />
      </div>
    )
  }
}
  
export default Spinner;