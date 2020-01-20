import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      boxes: ''
    }
  }

  handleChange = e => {
    this.setState({
      boxes: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.boxes);
  }


  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input type="text" value={this.state.boxes} onChange={this.handleChange}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
