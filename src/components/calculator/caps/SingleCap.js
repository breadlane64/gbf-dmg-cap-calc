import React from 'react';
import CapDisplay from "./CapDisplay";
import MinorInfoDisplay from "./MinorInfoDisplay";
import CalcCapsContext from '../CalcCapsContext';

// Shows the soft damage cap for normal attacks.
class SingleCap extends React.Component {
  static contextType = CalcCapsContext;

  render() {
    let calcResults = this.context.calcResults;
    let singleAttack = calcResults.softCaps.singleAttack;

    return (
      <div>
        <CapDisplay name="Single Attack" value={singleAttack.softCap.toLocaleString()} />
        <MinorInfoDisplay>
          <span>Raw DMG to reach this cap: {singleAttack.rawDmg.toLocaleString()}</span>
        </MinorInfoDisplay>
      </div>
    );
  }
}

export default SingleCap;
