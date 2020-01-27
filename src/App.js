import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Containers/card'
import Form from './Components/form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ''
    }
  }

  render() {
    return (
      <div className="App">
        < Card />
        <Form />
      </div>
    );
};
}

export default App;
