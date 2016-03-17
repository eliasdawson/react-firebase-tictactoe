var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');

jest.unmock('../game');

describe('game component', function() {

  var component;
  var Game = require('../game');

  beforeEach(function() {
    game = TestUtils.renderIntoDocument(
      <Game gameId="0" />
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

  });

});
