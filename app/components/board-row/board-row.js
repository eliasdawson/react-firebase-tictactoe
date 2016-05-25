var React = require('react');
var Space = require('../space/space');

var BoardRow = React.createClass({

  render: function() {
    var spaces = this.props.data.map(function (space, index) {
      return (
        <Space key={index} data={space} rowIndex={this.props.rowIndex} colIndex={index} playFn={this.props.playFn}/>
      );
    }, this);

    return (
      <div className="ttt-board-row">
        {spaces}
      </div>
    );
  }

});

module.exports = BoardRow;
