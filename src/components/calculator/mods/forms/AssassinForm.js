import React from 'react';
import CollapsibleForm from './CollapsibleForm'
import AssassinModInput from '../groups/AssassinGroup'

// Contains the assassin modifier.
class AssassinForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true,
    };
  }

  render() {
    return (
      <CollapsibleForm
        formId="assassin-form"
        text="Assassin Modifier"
      >
        <AssassinModInput />
      </CollapsibleForm>
    );
  }
}

export default AssassinForm;
