import React, { Component } from 'react';
import Note from './Note'
import '../css/Board.css';

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Note title="title1" body="something1" />
            <Note title="title2" body="something2" />
            <Note title="title3" body="something3" />
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board
