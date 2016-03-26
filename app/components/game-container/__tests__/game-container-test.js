var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');

jest.unmock('../game-container');
jest.unmock('../../../game');

describe('game component', function() {

  var component;
  var GameContainer = require('../game-container');

  beforeEach(function() {
    game = TestUtils.renderIntoDocument(
      <GameContainer gameId="0" />
    );
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
      game.play(0, 0);
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

});
