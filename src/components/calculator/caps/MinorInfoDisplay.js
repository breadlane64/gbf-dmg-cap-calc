import React from 'react';

// Shows minor info about a soft cap.
class MinorInfoDisplay extends React.Component {
  render() {
    return (
      <div className="minor-info mb-2">
        {this.props.children}
      </div>
    );
  }
}

export default MinorInfoDisplay;
