var React = require('react');
var Firebase = require('firebase');
var Game = require('../../game.js');

var gameListRef = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/");

var GameList = React.createClass({

  createGame: function() {
    gameListRef.push(new Game().data);
  },

  render: function() {
    return (
      <div>
        <a onClick={this.createGame}>Create Game</a>
      </div>
    );
  }

});

module.exports = GameList;
