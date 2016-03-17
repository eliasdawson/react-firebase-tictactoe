var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');

jest.unmock('../space');

describe('space component', function() {

  var component;
  var Space = require('../space');

  var spy = {
    noop: function() {}
  };

  beforeEach(function() {
    spyOn(spy, 'noop');
  });

  describe('handleClick', function() {

    it('should call the play function if the space is empty', function() {
      component = TestUtils.renderIntoDocument(
        <Space data="" rowIndex={0} colIndex={0} playFn={spy.noop}/>
      );

      // Simulate a click and verify that it is now On
      TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithTag(component, 'div')
      );

      expect(spy.noop).toHaveBeenCalled();
    });

    it('should not call the play function if the space is occupied', function() {
      component = TestUtils.renderIntoDocument(
        <Space data="X" rowIndex={0} colIndex={0} playFn={spy.noop}/>
      );

      // Simulate a click and verify that it is now On
      TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithTag(component, 'div')
      );

      expect(spy.noop).not.toHaveBeenCalled();
    });

  });

});
