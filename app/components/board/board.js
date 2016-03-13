var React = require('react');
var BoardRow = require('../board-row/board-row.js');

var Board = React.createClass({

  render: function() {
    var rows = this.props.grid.map(function (row, index) {
      return (
        <BoardRow key={index} data={row} rowIndex={index} playFn={this.props.playFn}/>
      )
    }, this);

    return (
      <div className="ttt-board">
        {rows}
      </div>
    );
  }

});

module.exports = Board;
