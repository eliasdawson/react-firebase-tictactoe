var gameConfig = require("./game-constants");

var Game = function() {
  var i, j;

  this.data = {
    board: [],
    player: gameConfig.players.X
  };

  for(i = 0; i < gameConfig.boardSize; i += 1) {
    this.data.board.push([]);
    for(j = 0; j < gameConfig.boardSize; j += 1) {
      this.data.board[i].push(gameConfig.players.BLANK);
    }
  }
};

module.exports = Game;
