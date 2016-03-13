var React = require('react');
var Firebase = require('firebase');
var Board = require('../board/board.js');

var gameRef;

var X = 'X';
var O = 'O';

var Game = React.createClass({

  getInitialState: function() {
    //gameRef = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/0/");
    gameRef = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/" + this.props.gameId + "/");
    return {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: X
    };
  },

  componentDidMount: function() {
    var self = this;
    gameRef.on('value', function(snapshot) {
      self.setState(snapshot.val());
    });
  },

  play: function(colIndex, rowIndex) {
    var state = this.state;
    state.board[rowIndex][colIndex] = state.player;
    state.player = (state.player === X) ? O : X;
    gameRef.set(state);
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

module.exports = Game;
