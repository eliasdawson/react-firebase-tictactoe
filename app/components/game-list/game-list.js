var React = require('react');
var Firebase = require('firebase');
var Game = require('../../game.js');
var FirebaseIntegration = require('../../firebase-integration');
var GameContainer = require('../game-container/game-container');

//var gameListRef = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/");
var gameListRef = new Firebase( FirebaseIntegration.getGamesPath() );

var GameList = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    var component = this;
    gameListRef.on('value', function(snapshot) {
      component.setState(snapshot.val());
    });
  },

  createGame: function() {
    gameListRef.push(new Game().data);
  },
  
  render: function() {
    var games = Object.keys(this.state).map(function (gameId, index) {
      return (
        <GameContainer key={index} gameId={gameId}/>
      );
    }, this);

    return (
      <div>
        {games}
        <button onClick={this.createGame}>Create Game</button>
      </div>
    );
  }

});

module.exports = GameList;
