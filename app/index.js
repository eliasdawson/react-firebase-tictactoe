var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var GameContainer = require('./components/game-container/game-container.js');
var GameList = require('./components/game-list/game-list.js');
var Game = require('./game.js');
var FirebaseIntegration = require('./firebase-integration');

ReactDOM.render(
  <div>
    <GameList />
  </div>,
  document.getElementById('app')
);

window.resetGame = function(gameId) {
  var fbref = new Firebase( FirebaseIntegration.getGameUrl(gameId));
  fbref.set(new Game().data);
}
