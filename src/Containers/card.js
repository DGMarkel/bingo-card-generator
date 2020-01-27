import React, { Component } from 'react'
import Square from '../Components/square'

export default class Card extends Component {

  renderSquares = () => {
    const words = this.props.words.split(",");
    return words.map( word => <div><Square word={word} /></div>)
  }

  render () {
    return (
      <div>
        { this.renderSquares() }
      </div>
    )
  }
}
