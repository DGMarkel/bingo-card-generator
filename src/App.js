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

  handleChange = e => {
    this.setState({
      words: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.words);
  }


  render() {
    return (
      <div className="App">
        < Card />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} words={this.state.words}/>
      </div>
    );
};
}

export default App;
