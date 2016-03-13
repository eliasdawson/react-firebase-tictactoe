var React = require('react');

var Space = React.createClass({

  handleClick: function() {
    if ( this.props.data === '' ) {
      this.props.playFn(this.props.colIndex, this.props.rowIndex);
    }
  },

  render: function() {
    return (
      <div className="ttt-space" onClick={this.handleClick}>{this.props.data}</div>
    );
  }

});

module.exports = Space;
