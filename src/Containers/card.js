import React, { Component } from 'react'

export default class Card extends Component {

  /*
   generates bingo grid based on value of this.props.cells
   passes words to the grid based on array index
  */
  generateGrid = () => {
    const cells = parseInt(this.props.cells);
    let words = this.props.words.split(",");
    return [...Array(cells).keys()].map( (cell, i) => <div className="cell">{ words[i] || ''}</div> );
  };

  render () {
    return (
      <div className="grid">
        { this.generateGrid() }
      </div>
    )
  }
}
