import React, { Component } from 'react'

export default class Card extends Component {

  generateGrid = () => {
    const cells = parseInt(this.props.cells);
    let words = this.props.words.split(",");
    return [...Array(cells).keys()].map( (cell, i) => <div className="cell">{ words[i] || ''}</div> );
  };

  render () {
    let words = this.props.words.split(",")
    return (
      <div className="grid">
        { this.generateGrid() }
      </div>
    )
  }
}
