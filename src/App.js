import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Containers/card'
import Form from './Components/form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardTitle: 'BINGO',
      filledCells: '',
      cells: 25,
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // Currently unused -- keep it for now, not sure if I need it
  handleSubmit = e => {
    e.preventDefault();
  }

  defaultGame = () => {
    this.setState({
      cardTitle: 'BINGO',
      filledCells: [...Array(this.state.cells)].map(()=>Math.floor(Math.random()*75)).map(int=>++int),
      cells: 25
    })
  }

  componentDidMount() {
    this.defaultGame();
  }


  render() {
    return (
      <div className="app">
        <div className="game">
          < Card cardTitle={this.state.cardTitle} filledCells={this.state.filledCells} cells={this.state.cells}/>
        </div>
        <div className="controls">
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} filledCells={this.state.filledCells}/>
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
