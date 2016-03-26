var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var GameContainer = require('./components/game-container/game-container.js');
var GameList = require('./components/game-list/game-list.js');
var Game = require('./game.js');

ReactDOM.render(
  <div>
    <div>
      <GameContainer gameId="0" />
    </div>
    <div>
      <GameContainer gameId="-KD6KX4VJxr1dOUI_1xi" />
    </div>
    <GameList />
  </div>,
  document.getElementById('app')
);

window.resetGame = function(gameId) {
  var fbref = new Firebase("https://blazing-inferno-190.firebaseio.com/-JqBmJEqKYiHdKFW8xg_/games/" + gameId + "/");
  fbref.set(new Game().data);
}
