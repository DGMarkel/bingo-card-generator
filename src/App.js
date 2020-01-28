import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Containers/card'
import Form from './Components/form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: '',
      cells: 9,
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.words);
  }


  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="game">
          < Card words={this.state.words} cells={this.state.cells}/>
        </div>
        <div className="controls">
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} words={this.state.words}/>
          <select name="cells" onChange={this.handleChange}>
            <option value="9">3x3</option>
            <option value="16">4x4</option>
            <option value="25">5x5</option>
          </select>
        </div>
      </div>
    );
};
}

export default App;
