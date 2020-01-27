import React, { Component } from 'react'
import Square from '../Components/square'

export default class Card extends Component {

  render () {
    let words = this.props.words.split(",")
    return (
      <div className="grid">
        <div className="cell">{ words[0] || ''}</div>
        <div className="cell">{ words[1] || ''}</div>
        <div className="cell">{ words[2] || ''}</div>
        <div className="cell">{ words[3] || ''}</div>
        <div className="cell">{ words[4] || ''}</div>
        <div className="cell">{ words[5] || ''}</div>
        <div className="cell">{ words[6] || ''}</div>
        <div className="cell">{ words[7] || ''}</div>
        <div className="cell">{ words[8] || ''}</div>
      </div>
    )
  }
}
