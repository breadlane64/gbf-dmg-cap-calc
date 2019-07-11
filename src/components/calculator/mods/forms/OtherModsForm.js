import React from 'react';
import ModList from './ModList';
import ModListItem from './ModListItem';
import CollapsibleForm from './CollapsibleForm'
import OtherDmgModInput from '../groups/OtherDmgModGroup';
import OtherCaDmgModInput from '../groups/OtherCaDmgModGroup';

// Contains the groups of other modifiers.
class OtherModsForm extends React.Component {
  render() {
    return (
      <CollapsibleForm
        formId="other-modifiers-form"
        text="Other Modifiers"
      >
        <ModList>
          <ModListItem><OtherDmgModInput /></ModListItem>
          <ModListItem><OtherCaDmgModInput /></ModListItem>
        </ModList>
      </CollapsibleForm>
    );
  }
}

export default OtherModsForm;
