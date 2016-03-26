var React = require('react');
var Firebase = require('firebase');
var gameConfig = require('../../game-constants');
var Game = require('../../game');
var Board = require('../board/board');

/**
 * Bind game data to Firebase object
 * @param  {Object} component Game container component to bind to.
 * @param  {string} gameId    Firebase ID of the game
 */
function bindFireBaseGame(component, gameId) {
  component.gameRef = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/" + gameId + "/");
  component.gameRef.on('value', function(snapshot) {
    component.setState(snapshot.val());
  });
}

var GameContainer = React.createClass({

  getInitialState: function() {
    return new Game().data;
  },

  componentWillReceiveProps: function() {
    if (this.props.gameId !== nextProps.gameId) {
      bindFireBaseGame(this, nextProps.gameId);
    }
  },

  componentDidMount: function() {
    bindFireBaseGame(this, this.props.gameId);
  },

  play: function(colIndex, rowIndex) {
    var state = this.state;
    if (state.board[rowIndex][colIndex] === '') {
      state.board[rowIndex][colIndex] = state.player;
      state.player = (state.player === gameConfig.players.X) ? gameConfig.players.O : gameConfig.players.X;
      this.gameRef.set(state);
    }
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
