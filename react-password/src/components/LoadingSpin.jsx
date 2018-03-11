import React, { Component } from 'react';
import { Spin } from 'antd'

const spinnerStyle = {
  'marginLeft' : '200px'
}

class Spinner extends Component {
  render() {
    return (
      <div style={spinnerStyle}>
        <Spin size="large" /><br></br>Please Wait...
      </div>
    );
  }
}

export default Spinner;