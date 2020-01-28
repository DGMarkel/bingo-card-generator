import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <form onClick={this.props.handleSubmit}>
        <textarea name="words" value={this.props.words} onChange={this.props.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
