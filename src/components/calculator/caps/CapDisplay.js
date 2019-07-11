import React from 'react';

// Shows a soft damage cap based on props.
class CapDisplay extends React.Component {
  render() {
    return (
      <div className="h5">
        <span>{this.props.name}: </span>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default CapDisplay;
