import React, { Component } from 'react'

export default class Card extends Component {

  /*
   generates bingo grid based on value of this.props.cells
   passes filledCells to the grid based on array index
  */

  generateGrid = () => {
    console.log(this.props)
    const cells = parseInt(this.props.cells);
    let filledCells = Array.isArray(this.props.filledCells) ? this.props.filledCells : this.props.filledCells.split(",");
    return [...Array(cells).keys()].map( (cell, i) => <div className={`cell ${this.flexDimensions(cells)}`}><p>{ filledCells[i] || ''}</p></div> );
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
        <div className="card-title">{this.props.cardTitle.toUpperCase()}</div>
        <div className="grid">
          { this.generateGrid() }
        </div>
      </div>
    )
  }
}
