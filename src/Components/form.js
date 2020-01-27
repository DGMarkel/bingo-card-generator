import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <form onClick={this.props.handleSubmit}>
        <input type="text" value={this.props.words} onChange={this.props.handleChange}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
