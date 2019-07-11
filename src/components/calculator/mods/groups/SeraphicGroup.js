import React from 'react';
import { Col, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import Seraphic from 'gbf/data/mods/Seraphic'
import WithTooltip from 'components/common/WithTooltip'
import CalcModsContext from 'components/calculator/CalcModsContext';
import DescriptionInput from '../inputs/DescriptionInput';
import ModKeySelect from '../inputs/ModKeySelect';
import DmgCapUpInput from '../inputs/DmgCapUpInput';

// Contains the seraphic modifier.
class SeraphicGroup extends React.Component {
  static contextType = CalcModsContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    let seraphic = calcParams.mods.finalDmg.seraphic;
    if (seraphic.key !== Seraphic.CUSTOM.key) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original data to avoid
      // modifying it.
      let oldName = seraphic.name;
      seraphic = {...seraphic};
      seraphic.key = Seraphic.CUSTOM.key;
      seraphic.description = oldName;
      calcParams.mods.finalDmg.seraphic = seraphic;
      GbfData.custom.seraphic = seraphic;
    }
    if (event.target.type === "number") {
      let value = parseFloat(event.target.value);
      if (!isFinite(value)) {
        // Ignore strings that are not finite numbers.
        return;
      }
      seraphic[event.target.name] = value;
    } else {
      seraphic[event.target.name] = event.target.value;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    if (event.target.value === Seraphic.CUSTOM.key) {
      calcParams.mods.finalDmg.seraphic = GbfData.custom.seraphic;
    } else {
      calcParams.mods.finalDmg.seraphic = Seraphic[event.target.value];
      // Sanity check.
      if (calcParams.mods.finalDmg.seraphic === undefined) {
        console.error("Invalid seraphic type '" + event.target.value + "' from select.");
        calcParams.mods.finalDmg.seraphic = Seraphic.NONE;
      }
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    // Get the seraphic data.
    let calcParams = this.context.calcParams;
    let seraphic = calcParams.mods.finalDmg.seraphic;

    return (
      <Form.Group>
        <Form.Row>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Seraphic weapon, matching your element">Seraphic</WithTooltip>
              <span> rarity</span>
            </Form.Label>
            <ModKeySelect
              onChange={this.handleSelectChange}
              value={seraphic.key}
              modHashmap={Seraphic}
            />
          </Col>
          <Col sm={6}>
            <DmgCapUpInput
              onChange={this.handleParamChange}
              value={seraphic.dmgCapUp}
            />
          </Col>
        </Form.Row>
        <DescriptionInput
          selectedKey={seraphic.key}
          onChange={this.handleParamChange}
          value={seraphic.description}
        />
      </Form.Group>
    );
  }
}

export default SeraphicGroup;
