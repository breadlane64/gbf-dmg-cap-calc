import React from 'react';

// Contains a modifier in a list of modifiers.
class ModListItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
}

export default ModListItem;
