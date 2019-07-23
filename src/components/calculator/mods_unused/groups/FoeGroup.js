import React from 'react';
import { Col, Collapse, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import FoeElement from 'gbf/data/general/FoeElement'
import FoeOffElementReduction from 'gbf/data/mods/FoeOffElementReduction'
import CalcPartyContext from 'components/calculator/CalcPartyContext';
import WithTooltip from 'components/common/WithTooltip'
import DescriptionInput from '../inputs/DescriptionInput';
import ModKeySelect from '../inputs/ModKeySelect';

// Contains the foe parameters.
class FoeGroup extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    let offElemReduction = calcParams.foeOffElementReduction;
    if (offElemReduction.key !== FoeOffElementReduction.CUSTOM_KEY.key) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original data to avoid
      // modifying it.
      let oldName = offElemReduction.name;
      offElemReduction = {...offElemReduction};
      offElemReduction.key = FoeOffElementReduction.CUSTOM_KEY.key;
      offElemReduction.description = oldName;
      calcParams.foeOffElementReduction = offElemReduction;
      GbfData.custom.foeOffElementReduction = offElemReduction;
    }
    if (event.target.type === "number") {
      let value = parseFloat(event.target.value);
      if (!isFinite(value)) {
        // Ignore strings that are not finite numbers.
        return;
      }
      offElemReduction[event.target.name] = value;
    } else {
      offElemReduction[event.target.name] = event.target.value;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    if (event.target.name === "foeElement") {
      calcParams.foeElement = FoeElement[event.target.value];
    } else {
      // Off-element resistance changed.
      if (event.target.value === FoeOffElementReduction.CUSTOM_KEY.key) {
        calcParams.foeOffElementReduction = GbfData.custom.foeOffElementReduction;
      } else {
        calcParams.foeOffElementReduction = FoeOffElementReduction[event.target.value];
        // Sanity check.
        if (calcParams.foeOffElementReduction === undefined) {
          console.error("Invalid off-element reduction type '" + event.target.value + "' from select.");
          calcParams.foeOffElementReduction = FoeOffElementReduction.NONE;
        }
      }
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let offElemReduction = calcParams.foeOffElementReduction;

    return (
      <Form.Group>
        <ModKeySelect
          className="mb-1"
          name="foeElement"
          onChange={this.handleSelectChange}
          value={calcParams.foeElement.key}
          modHashmap={FoeElement}
        />
        <Collapse in={calcParams.foeElement.key !== FoeElement.WEAK.key}>
          <div>
            <Form.Row>
              <Col sm={6}>
                <Form.Label>
                  <WithTooltip tooltip="Foe takes reduced DMG from elements it is not weak to">
                    Off-element resistance
                  </WithTooltip>
                </Form.Label>
                <ModKeySelect
                  name="foeOffElementReduction"
                  onChange={this.handleSelectChange}
                  value={offElemReduction.key}
                  modHashmap={FoeOffElementReduction}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>
                  <WithTooltip tooltip="DMG reduction (%)">
                    Reduction
                  </WithTooltip>
                </Form.Label>
                <Form.Control
                  className="no-spinner-sm"
                  name="dmgReduction"
                  onChange={this.handleParamChange}
                  type="number"
                  value={offElemReduction.dmgReduction}
                />
              </Col>
            </Form.Row>
            <DescriptionInput
              selectedKey={offElemReduction.key}
              onChange={this.handleParamChange}
              value={offElemReduction.description}
            />
          </div>
        </Collapse>
      </Form.Group>
    );
  }
}

export default FoeGroup;
