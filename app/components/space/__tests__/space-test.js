jest.unmock('../space');

describe('space component', function() {

  var Space = require('../space');

  describe('handleClick', function() {

    xit('It should call the play function if the space is empty', function() {
      Space.props = '';
    });

    xit('It should not call the play function if the space is occupied', function() {
      Space.props = 'X';
    });

  });

});
