import React from 'react';
import { Col, Collapse, Form } from 'react-bootstrap';
import GbfData from 'gbf/GbfData'
import EnemyElement from 'gbf/data/general/EnemyElement'
import EnemyOffElementReduction from 'gbf/data/mods/EnemyOffElementReduction'
import CalcModsContext from 'components/calculator/CalcModsContext';
import WithTooltip from 'components/common/WithTooltip'
import DescriptionInput from '../inputs/DescriptionInput';
import ModKeySelect from '../inputs/ModKeySelect';

// Contains the enemy parameters.
class EnemyGroup extends React.Component {
  static contextType = CalcModsContext;

  constructor(props) {
    super(props);

    // Allow 'this' to work correctly when handling these events.
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
  }

  handleParamChange(event) {
    let calcParams = this.context.calcParams;
    let offElemReduction = calcParams.enemyOffElementReduction;
    if (offElemReduction.key !== EnemyOffElementReduction.CUSTOM.key) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original data to avoid
      // modifying it.
      let oldName = offElemReduction.name;
      offElemReduction = {...offElemReduction};
      offElemReduction.key = EnemyOffElementReduction.CUSTOM.key;
      offElemReduction.description = oldName;
      calcParams.enemyOffElementReduction = offElemReduction;
      GbfData.custom.enemyOffElementReduction = offElemReduction;
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
    if (event.target.name === "enemyElement") {
      calcParams.enemyElement = EnemyElement[event.target.value];
    } else {
      // Off-element resistance changed.
      if (event.target.value === EnemyOffElementReduction.CUSTOM.key) {
        calcParams.enemyOffElementReduction = GbfData.custom.enemyOffElementReduction;
      } else {
        calcParams.enemyOffElementReduction = EnemyOffElementReduction[event.target.value];
        // Sanity check.
        if (calcParams.enemyOffElementReduction === undefined) {
          console.error("Invalid off-element reduction type '" + event.target.value + "' from select.");
          calcParams.enemyOffElementReduction = EnemyOffElementReduction.NONE;
        }
      }
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let offElemReduction = calcParams.enemyOffElementReduction;

    return (
      <Form.Group>
        <ModKeySelect
          className="mb-1"
          name="enemyElement"
          onChange={this.handleSelectChange}
          value={calcParams.enemyElement.key}
          modHashmap={EnemyElement}
        />
        <Collapse in={!calcParams.enemyElement.isWeak}>
          <div>
            <Form.Row>
              <Col sm={6}>
                <Form.Label>
                  <WithTooltip tooltip="Enemy takes reduced DMG from elements it is not weak to">
                    Off-element resistance
                  </WithTooltip>
                </Form.Label>
                <ModKeySelect
                  name="enemyOffElementReduction"
                  onChange={this.handleSelectChange}
                  value={offElemReduction.key}
                  modHashmap={EnemyOffElementReduction}
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

export default EnemyGroup;
