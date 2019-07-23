import React from 'react';
import CollapsibleDiv from 'components/common/CollapsibleDiv'
import AllCharacters from './AllCharacters';
import CharacterSelect from './CharacterSelect';
import Mc from './Mc';

// The dmg caps section of the calculator view.
class PartySection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="calc-section-header h4 text-primary text-center">Party</h1>
        <CharacterSelect />
        <AllCharacters />
        <Mc />
      </div>
    );
  }
}

export default PartySection;
