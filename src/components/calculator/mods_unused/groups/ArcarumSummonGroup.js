import React from 'react';
import { Col, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import ArcarumSummonSubAura from 'gbf/data/mods/ArcarumSummonSubAura'
import WithTooltip from 'components/common/WithTooltip'
import CalcPartyContext from 'components/calculator/CalcPartyContext';
import DescriptionInput from '../inputs/DescriptionInput';
import ModKeySelect from '../inputs/ModKeySelect';
import DmgCapUpInput from '../inputs/DmgCapUpInput';

// Contains the Arcarum summon sub-aura modifier.
class ArcarumSummonGroup extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    let arcarumSSA = calcParams.mods.finalDmg.arcarumSummonSubAura;
    if (arcarumSSA.key !== ArcarumSummonSubAura.CUSTOM_KEY.key) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original data to avoid
      // modifying it.
      let oldName = arcarumSSA.name;
      arcarumSSA = {...arcarumSSA};
      arcarumSSA.key = ArcarumSummonSubAura.CUSTOM_KEY.key;
      arcarumSSA.description = oldName;
      calcParams.mods.finalDmg.arcarumSummonSubAura = arcarumSSA;
      GbfData.custom.arcarumSummonSubAura = arcarumSSA;
    }
    if (event.target.type === "number") {
      let value = parseFloat(event.target.value);
      if (!isFinite(value)) {
        // Ignore strings that are not finite numbers.
        return;
      }
      arcarumSSA[event.target.name] = value;
    } else {
      arcarumSSA[event.target.name] = event.target.value;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    if (event.target.value === ArcarumSummonSubAura.CUSTOM_KEY.key) {
      calcParams.mods.finalDmg.arcarumSummonSubAura = GbfData.custom.arcarumSummonSubAura;
    } else {
      calcParams.mods.finalDmg.arcarumSummonSubAura = ArcarumSummonSubAura[event.target.value];
      // Sanity check.
      if (calcParams.mods.finalDmg.arcarumSummonSubAura === undefined) {
        console.error("Invalid arcarum summon sub aura type '" + event.target.value + "' from select.");
        calcParams.mods.finalDmg.arcarumSummonSubAura = ArcarumSummonSubAura.NONE;
      }
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let arcarumSSA = calcParams.mods.finalDmg.arcarumSummonSubAura;

    return (
      <Form.Group>
        <Form.Row>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Arcarum summon equipped as a sub-summon, matching your element">
                Arcarum sub-summon
              </WithTooltip>
            </Form.Label>
            <ModKeySelect
              onChange={this.handleSelectChange}
              value={arcarumSSA.key}
              modHashmap={ArcarumSummonSubAura}
            />
          </Col>
          <Col sm={6}>
            <DmgCapUpInput
              onChange={this.handleParamChange}
              value={arcarumSSA.dmgCapUp}
            />
          </Col>
        </Form.Row>
        <DescriptionInput
          selectedKey={arcarumSSA.key}
          onChange={this.handleParamChange}
          value={arcarumSSA.description}
        />
      </Form.Group>
    );
  }
}

export default ArcarumSummonGroup;
