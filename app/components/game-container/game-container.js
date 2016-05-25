var React = require('react');
var Firebase = require('firebase');
var gameConfig = require('../../game-constants');
var Game = require('../../game');
var Board = require('../board/board');
var FirebaseIntegration = require('../../firebase-integration');

var GameContainer = React.createClass({

  getInitialState: function() {
    return new Game().data;
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.gameId !== nextProps.gameId) {
      FirebaseIntegration.bindFirebaseGame(this, nextProps.gameId);
    }
  },

  componentDidMount: function() {
    FirebaseIntegration.bindFirebaseGame(this, this.props.gameId);
  },

  /**
   * Play in the specified space on the game board.
   * @param  {Number} colIndex Index of column in which to play
   * @param  {Number} rowIndex Index of row in which to play
   */
  play: function(colIndex, rowIndex) {
    var state = this.state;

    // Only play in blank spaces
    if (state.board[rowIndex][colIndex] === '') {
      state.board[rowIndex][colIndex] = state.player;

      // Update current player
      state.player = (state.player === gameConfig.players.X) ? gameConfig.players.O : gameConfig.players.X;

      this.gameRef.set(state);
    }
  },

  /**
   * Reset game to initial state
   */
  resetGame: function() {
    this.gameRef.set(new Game().data);
  },

  render: function() {
    return (
      <div>
        <span>Current player: {this.state.player}</span>
        <Board grid={this.state.board} playFn={this.play}/>
      </div>
    );
  }

});

module.exports = GameContainer;
