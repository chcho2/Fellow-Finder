import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board.jsx';
import InfoContainer from './InfoContainer.jsx';
// Board, Info Container

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <InfoContainer />
        <Board state={this.props.state} onCardClick={this.props.onCardClick} />
      </div>
    );
  }
}

export default Game;
