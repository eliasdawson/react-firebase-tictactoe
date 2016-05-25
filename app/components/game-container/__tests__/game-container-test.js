var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');

jest.unmock('../../../game');
jest.unmock('../../../firebase-integration');
jest.unmock('../game-container');

describe('game component', function() {

  var component;
  var GameContainer = require('../game-container');

  beforeEach(function() {
    game = TestUtils.renderIntoDocument(
      <GameContainer gameId="0" />
    );
    game.resetGame();
  });

  describe('play', function() {

    it('should enter the current player in the specified space', function() {
      expect(game.state.board[0][0]).toBe('');
      expect(game.state.player).toBe('X');

      game.play(0, 0);

      expect(game.state.board[0][0]).toBe('X');
    });

    it('should switch to the next player after playing', function() {
      expect(game.state.player).toBe('X');
      game.play(1, 1);
      expect(game.state.player).toBe('O');
    });

    it('should not enter the current player in the specified space if the space is occupied', function() {
      var state = game.state;
      state.board[0][0] = 'O';
      game.setState(state);
      expect(game.state.board[0][0]).toBe('O');
      game.play(0, 0);
      expect(game.state.board[0][0]).toBe('O');
    });

  });

  describe('resetGame', function() {

    it('should reset the current player to the default first player', function() {
      expect(game.state.player).toBe('X');
      var state = game.state;
      state.player = 'O';
      game.setState(state);
      expect(game.state.player).toBe('O');
      game.resetGame();

      // Wait for game state to update from Firebase
      var t = setTimeout( function() {
        expect(game.state.player).toBe('X');  
      }, 2000);
    });

    it('should reset all spaces on the board to blank', function() {
      var i, j;
      var state = game.state;
      
      for (i = 0; i < game.state.board.length; i += 1) {
        for (j = 0; j < game.state.board[i].length; j += 1) {
          state.board[i,j] = 'X';
        }
      }
      
      game.setState(state);
      
      for (i = 0; i < game.state.board.length; i += 1) {
        for (j = 0; j < game.state.board[i].length; j += 1) {
          expect(game.state.board[i,j]).toBe('X');
        }
      }

      game.resetGame();
      
      // Wait for game state to update from Firebase
      var t = setTimeout( function() {
        for (i = 0; i < game.state.board.length; i += 1) {
          for (j = 0; j < game.state.board[i].length; j += 1) {
            expect(game.state.board[i,j]).toBe('');
          }
        }
      }, 2000);
    });
  });

});
