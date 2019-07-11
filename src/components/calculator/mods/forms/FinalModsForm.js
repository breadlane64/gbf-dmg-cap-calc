import React from 'react';
import CollapsibleForm from './CollapsibleForm'
import SeraphicGroup from '../groups/SeraphicGroup';
import ArcarumSummonGroup from '../groups/ArcarumSummonGroup';

// Contains the groups of final modifiers.
class FinalModsForm extends React.Component {
  render() {
    return (
      <CollapsibleForm
        formId="final-modifiers-form"
        text="Final Modifiers"
      >
        <SeraphicGroup />
        <ArcarumSummonGroup />
      </CollapsibleForm>
    );
  }
}

export default FinalModsForm;
