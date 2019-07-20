import React from 'react';
import CollapsibleDiv from 'components/common/CollapsibleDiv'
import CalcPartyContext from '../CalcPartyContext';
import CharacterSelect from './CharacterSelect';

// The dmg caps section of the calculator view.
class AllCharacters extends React.Component {
  static contextType = CalcPartyContext;

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
          TODO
        </CollapsibleDiv>
      </div>
    );
  }
}

export default AllCharacters;
