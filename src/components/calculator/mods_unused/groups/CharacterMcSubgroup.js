import React from 'react';
import { Col, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GbfData from 'gbf/GbfData'
import CalcPartyContext from 'components/calculator/CalcPartyContext';
import WithTooltip from 'components/common/WithTooltip'

// Contains the character parameters.
class CharacterMcSubgroup extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleCheckboxChange(checkedValues) {
    let calcParams = this.context.calcParams;
    calcParams.mc.hasMasteredMechanic = (checkedValues.length > 0)
    this.context.setAllCalcParams(calcParams);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    if (event.target.type === "number") {
      let value = parseFloat(event.target.value);
      if (!isFinite(value)) {
        // Ignore strings that are not finite numbers.
        return;
      }
      calcParams.mc[event.target.name] = value;
    } else {
      // Checkbox changed.
      calcParams.mc[event.target.name] = true; // TODO
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let checkboxIcon = (calcParams.mc.hasMasteredMechanic ? "check-square" : "square");

    return (
      <>
        <div className="mb-1">
          <WithTooltip
            decorated={false}
            tooltip="Mastering the Mechanic class adds 1% DMG cap up"
          >
            <ToggleButtonGroup
              type="checkbox"
              name="hasMasteredMechanic"
              value={calcParams.mc.hasMasteredMechanic ? ["1"] : []}
              onChange={this.handleCheckboxChange}
            >
              <ToggleButton
                className="no-btn-outline"
                variant="outline-secondary"
                value="1"
              >
                <FontAwesomeIcon className="mr-1" icon={["far", checkboxIcon]} size="lg" />
                Mechanic mastered
              </ToggleButton>
            </ToggleButtonGroup>
          </WithTooltip>
        </div>
        <Form.Row>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Total DMG cap up (%) from MC's EMPs, e.g. max 15% at rank 195">
                DMG cap up EMPs
              </WithTooltip>
            </Form.Label>
            <Form.Control
              className="no-spinner-sm"
              name="dmgCapUpEmps"
              onChange={this.handleParamChange}
              type="number"
              value={calcParams.mc.dmgCapUpEmps}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Total Chain Burst DMG cap up (%) from MC's EMPs, e.g. max 5% at rank 240">
                Chain cap up EMPs
              </WithTooltip>
            </Form.Label>
            <Form.Control
              className="no-spinner-sm"
              name="chainDmgCapUpEmps"
              onChange={this.handleParamChange}
              type="number"
              value={calcParams.mc.chainDmgCapUpEmps}
            />
          </Col>
        </Form.Row>
      </>
    );
  }
}

export default CharacterMcSubgroup;
