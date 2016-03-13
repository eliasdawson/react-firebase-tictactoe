var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Game = require('./components/game/game.js');

ReactDOM.render(
  <Game gameId="0" />,
  document.getElementById('app')
);
