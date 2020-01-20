import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      boxes: null
    }
  }

  render() {
    return (
      <div>
        <input type="text" className="form" ></input>
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
      </div>
    )
  }
}
