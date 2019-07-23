import React from 'react';
import { Col, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import Assassin from 'gbf/data/mods/Assassin'
import CalcPartyContext from 'components/calculator/CalcPartyContext';
import WithTooltip from 'components/common/WithTooltip'
import ChargeCapUpInput from '../inputs/ChargeCapUpInput';
import DescriptionInput from '../inputs/DescriptionInput';
import ModKeySelect from '../inputs/ModKeySelect';
import SingleCapUpInput from '../inputs/SingleCapUpInput';

// Contains the assassin modifier.
class AssassinGroup extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    let assassin = calcParams.mods.assassin;
    if (assassin.key !== Assassin.CUSTOM_KEY.key) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original data to avoid
      // modifying it.
      let oldName = assassin.name;
      assassin = {...assassin};
      assassin.key = Assassin.CUSTOM_KEY.key;
      assassin.description = oldName;
      calcParams.mods.assassin = assassin;
      GbfData.custom.assassin = assassin;
    }
    if (event.target.type === "number") {
      let value = parseFloat(event.target.value);
      if (!isFinite(value)) {
        // Ignore strings that are not finite numbers.
        return;
      }
      assassin[event.target.name] = value;
    } else {
      assassin[event.target.name] = event.target.value;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    if (event.target.value === Assassin.CUSTOM_KEY.key) {
      calcParams.mods.assassin = GbfData.custom.assassin;
    } else {
      calcParams.mods.assassin = Assassin[event.target.value];
      // Sanity check.
      if (calcParams.mods.assassin === undefined) {
        console.error("Invalid assassin type '" + event.target.value + "' from select.");
        calcParams.mods.assassin = Assassin.NONE;
      }
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let assassin = calcParams.mods.assassin;

    return (
      <Form.Group>
        <Form.Row>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Salted Wound, Defiance, Shiva's summon call, etc.">
                Assassin
              </WithTooltip>
              <span> buff</span>
            </Form.Label>
            <ModKeySelect
              onChange={this.handleSelectChange}
              value={assassin.key}
              modHashmap={Assassin}
            />
          </Col>
          <Col sm={3}>
            <SingleCapUpInput
              onChange={this.handleParamChange}
              value={assassin.singleCapUp}
            />
          </Col>
          <Col sm={3}>
            <ChargeCapUpInput
              onChange={this.handleParamChange}
              value={assassin.chargeCapUp}
            />
          </Col>
        </Form.Row>
        <DescriptionInput
          selectedKey={assassin.key}
          onChange={this.handleParamChange}
          value={assassin.description}
        />
      </Form.Group>
    );
  }
}

export default AssassinGroup;
