import React from 'react';
import CollapsibleForm from './CollapsibleForm'
import EnemyGroup from '../groups/EnemyGroup';

// Contains the groups of final modifiers.
class GeneralForm extends React.Component {
  render() {
    return (
      <CollapsibleForm
        formId="general-form"
        text="General"
      >
        <EnemyGroup />
      </CollapsibleForm>
    );
  }
}

export default GeneralForm;
