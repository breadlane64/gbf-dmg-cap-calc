import React from 'react';
import CollapsibleDiv from 'components/common/CollapsibleDiv'
import CalcCapsContext from '../CalcCapsContext';
import DmgCap from './DmgCap'

// The dmg caps section of the calculator view.
class CapsSection extends React.Component {
  static contextType = CalcCapsContext;

  chargeCaps() {
    let calcResults = this.context.calcResults;
    let caps = [];
    for (let dmgCap of calcResults.chargeCaps) {
      caps.push(<DmgCap key={dmgCap.id} dmgCap={dmgCap} isSingle={false} />);
    }
    return caps;
  }

  singleCaps() {
    let calcResults = this.context.calcResults;
    let caps = [];
    for (let dmgCap of calcResults.singleCaps) {
      caps.push(<DmgCap key={dmgCap.id} dmgCap={dmgCap} isSingle={true} />);
    }
    return caps;
  }

  render() {
    return (
      <div>
        <h1 className="h4 text-primary text-center">Soft DMG Caps</h1>
        <CollapsibleDiv
          collapsibleId="single-caps"
          text="Single attack"
        >
          {this.singleCaps()}
        </CollapsibleDiv>
        <CollapsibleDiv
          collapsibleId="charge-caps"
          text="CA"
        >
          {this.chargeCaps()}
        </CollapsibleDiv>
      </div>
    );
  }
}

export default CapsSection;
