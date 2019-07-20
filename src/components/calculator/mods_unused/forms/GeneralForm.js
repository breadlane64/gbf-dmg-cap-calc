import React from 'react';
import CollapsibleForm from './CollapsibleForm'
import CharacterGroup from '../groups/CharacterGroup';
import FoeGroup from '../groups/FoeGroup';

// Contains the groups of final modifiers.
class GeneralForm extends React.Component {
  render() {
    return (
      <CollapsibleForm
        formId="general-form"
        text="General"
      >
        <CharacterGroup />
        <FoeGroup />
      </CollapsibleForm>
    );
  }
}

export default GeneralForm;
