import React from 'react';

// Contains a list of modifiers.
class ModList extends React.Component {
  render() {
    return (
      <ul className="mod-list">
        {this.props.children}
      </ul>
    );
  }
}

export default ModList;
