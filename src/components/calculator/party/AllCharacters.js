import React from 'react';
import CollapsibleDiv from 'components/common/CollapsibleDiv'
import CalcPartyContext from '../CalcPartyContext';
import CharacterSelect from './CharacterSelect';
import OtherWeapon from './OtherWeapon';
import SeraphicWeapon from './SeraphicWeapon';

// The dmg caps section of the calculator view.
class AllCharacters extends React.Component {
  static contextType = CalcPartyContext;

  renderOtherWeapons() {
    let weaponCount = this.context.calcParams.party.otherWeapons.length;
    let results = [];
    for (let i = 0; i < weaponCount; i += 1) {
      results.push(<OtherWeapon key={i} index={i} />);
    }
    return results;
  }

  render() {
    let className = "";
    if (this.context.curCharacterId !== CharacterSelect.ALL_CHARACTERS_ID) {
      // Hide this component if All Characters is not selected.
      className = "d-none";
    }

    return (
      <div className={className}>
        <CollapsibleDiv
          collapsibleId="foe-collapsible"
          text="Foe"
        >
          TODO
        </CollapsibleDiv>
        <CollapsibleDiv
          collapsibleId="weapons-collapsible"
          text="Weapons"
        >
          <SeraphicWeapon />
          {this.renderOtherWeapons()}
        </CollapsibleDiv>
      </div>
    );
  }
}

export default AllCharacters;
