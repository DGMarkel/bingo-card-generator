import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <form onClick={this.props.handleSubmit}>
        <textarea name="filledCells" value={this.props.filledCells} onChange={this.props.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
