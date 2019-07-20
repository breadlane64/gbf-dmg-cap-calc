import React from 'react';
import CollapsibleDiv from 'components/common/CollapsibleDiv'
import GbfData from 'gbf/GbfData'
import CalcPartyContext from '../CalcPartyContext';

// The dmg caps section of the calculator view.
class Mc extends React.Component {
  static contextType = CalcPartyContext;

  render() {
    let className = "";
    if (this.context.curCharacterId !== GbfData.MC_ID) {
      // Hide this component if the MC is not selected.
      className = "d-none";
    }

    return (
      <div className={className}>
        <CollapsibleDiv
          collapsibleId="foe-collapsible"
          text="Class"
        >
          TODO
        </CollapsibleDiv>
        <CollapsibleDiv
          collapsibleId="weapons-collapsible"
          text="Single attack cap tiers"
        >
          TODO
        </CollapsibleDiv>
      </div>
    );
  }
}

export default Mc;
