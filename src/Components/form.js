import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input type="text" value={this.state.boxes} onChange={this.handleChange}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
