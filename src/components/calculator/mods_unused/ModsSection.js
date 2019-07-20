import React from 'react';
import AssassinModForm from "./forms/AssassinForm";
import FinalModsForm from "./forms/FinalModsForm";
import GeneralForm from "./forms/GeneralForm";
import OtherModsForm from "./forms/OtherModsForm";

// The modifiers section of the calculator view.
class ModsSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="h3 text-primary">Parameters</h1>
        <GeneralForm />
        <FinalModsForm />
        <AssassinModForm />
        <OtherModsForm />
      </div>
    );
  }
}

export default ModsSection;
