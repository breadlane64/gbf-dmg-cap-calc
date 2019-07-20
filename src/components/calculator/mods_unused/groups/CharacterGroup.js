import React from 'react';
import { Collapse, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import Character from 'gbf/data/general/Character'
import CalcPartyContext from 'components/calculator/CalcPartyContext';
import CharacterMcSubgroup from './CharacterMcSubgroup';
import ModKeySelect from '../inputs/ModKeySelect';

// Contains the character parameters.
class CharacterGroup extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    calcParams.character = Character[event.target.value];
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;

    return (
      <Form.Group>
        <ModKeySelect
          className="mb-1"
          name="character"
          onChange={this.handleSelectChange}
          value={calcParams.character.key}
          modHashmap={Character}
        />
        <Collapse in={calcParams.character.key === Character.MC.key}>
          <div>
            <CharacterMcSubgroup />
          </div>
        </Collapse>
        <Collapse in={calcParams.character.key !== Character.MC.key}>
          <div>
            not MC
          </div>
        </Collapse>
      </Form.Group>
    );
  }
}

export default CharacterGroup;
