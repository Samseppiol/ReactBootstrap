import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/alert.js'
import { Button } from './components/button.js'

class App extends Component {
  render() {
    return (
    <div>
      <Alert>
        <strong> Default Info </strong> You successfully got js working
      </Alert>

      <Alert alertType="danger">
        <strong> Danger Alert!</strong>
      </Alert>

      <Alert alertType="warning">
        <strong> WARNING!!!!!!!!!!!!!! </strong>
      </Alert>

      <Button>
        <strong> Hello </strong>
      </Button>

      <Button buttonType="secondary">
        <strong>Great Success </strong>
      </Button>

      <Button buttonType="success">
        <strong>Great Success </strong>
      </Button>
    </div>
    );
  }
}

export default App;
