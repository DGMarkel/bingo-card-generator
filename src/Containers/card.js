import React, { Component } from 'react'

export default class Card extends Component {

  /*
   generates bingo grid based on value of this.props.cells
   passes words to the grid based on array index
  */

  generateGrid = () => {
    const cells = parseInt(this.props.cells);
    let words = this.props.words.split(",");
    return [...Array(cells).keys()].map( (cell, i) => <div className={`cell ${this.flexDimensions(cells)}`}>{ words[i] || ''}</div> );
  };


  // returns a className to define number of cells in grid
  // takes cells as argument passed from generateGrid
  flexDimensions = (cells) => {
    switch(cells) {
      case 9:
        return "grid-thirds"
      case 16:
        return "grid-quarters"
      case 25:
        return "grid-fifths"
    }
  }

  render () {
    return (
      <div className="card">
        <div className="grid">
          { this.generateGrid() }
        </div>
      </div>
    )
  }
}
