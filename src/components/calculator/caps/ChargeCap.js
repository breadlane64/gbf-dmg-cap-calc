import React from 'react';
import CapDisplay from "./CapDisplay";
import MinorInfoDisplay from "./MinorInfoDisplay";
import CalcCapsContext from '../CalcCapsContext';

// Shows the soft damage cap for charge attacks.
class ChargeCap extends React.Component {
  static contextType = CalcCapsContext;

  render() {
    let calcResults = this.context.calcResults;
    let chargeAttack = calcResults.softCaps.chargeAttack;

    return (
      <div>
        <CapDisplay name="Charge Attack" value={chargeAttack.softCap.toLocaleString()} />
        <MinorInfoDisplay>
          <span>Raw DMG to reach this cap: {chargeAttack.rawDmg.toLocaleString()}</span>
        </MinorInfoDisplay>
      </div>
    );
  }
}

export default ChargeCap;
