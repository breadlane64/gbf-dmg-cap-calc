import React from 'react';
import ChargeCap from './ChargeCap'
import SingleCap from './SingleCap'

// The dmg caps section of the calculator view.
class CapsSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="h3">Soft DMG Caps</h1>
        <div>
          <SingleCap />
          <ChargeCap />
        </div>
      </div>
    );
  }
}

export default CapsSection;
