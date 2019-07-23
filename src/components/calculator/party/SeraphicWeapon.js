import React from 'react';
import { Col, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CUSTOM_KEY } from 'gbf/data/DataUtils'
import CheckboxBtn from 'components/common/CheckboxBtn';
import SelectOptions from 'components/common/SelectOptions';
import WithTooltip from 'components/common/WithTooltip'
import SeraphicWeapons from 'gbf/data/weapons/Seraphic'
import CalcPartyContext from '../CalcPartyContext';

// Inputs for a seraphic weapon.
class SeraphicWeapon extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props, context) {
    super(props, context);

    // Allow 'this' to work correctly when handling these events.
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleEnabledChange = this.handleEnabledChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleDescriptionChange(event) {
    let calcParams = this.context.calcParams;
    let seraphicWeapon = calcParams.party.seraphicWeapon;
    seraphicWeapon.customData.description = event.target.value;
    this.context.setAllCalcParams(calcParams);
  }

  handleEnabledChange(checked) {
    let calcParams = this.context.calcParams;
    let seraphicWeapon = calcParams.party.seraphicWeapon;
    seraphicWeapon.enabled = checked;
    this.context.setAllCalcParams(calcParams);
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    let seraphicWeapon = calcParams.party.seraphicWeapon;
    if (event.target.value === CUSTOM_KEY) {
      seraphicWeapon.dataRef = seraphicWeapon.customData;
    } else {
      seraphicWeapon.dataRef = SeraphicWeapons[event.target.value];
      // Sanity check.
      if (seraphicWeapon.dataRef === undefined) {
        console.error("Invalid seraphic type '" + event.target.value + "' from select.");
        seraphicWeapon.dataRef = seraphicWeapon.customData;
      }
    }
    if (this.context.autoEnableOnChange) {
      seraphicWeapon.enabled = true;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleValueChange(event) {
    let calcParams = this.context.calcParams;
    let seraphicWeapon = calcParams.party.seraphicWeapon;
    let value = parseFloat(event.target.value);
    if (!isFinite(value)) {
      // Forbid non-number values.
      return;
    }
    if (seraphicWeapon.dataRef.key !== CUSTOM_KEY) {
      // Automatically change to custom when any param is changed.
      // We need to make a copy of the original, immutable data.
      seraphicWeapon.customData = {
        ...seraphicWeapon.dataRef,
        key: CUSTOM_KEY,
        description: seraphicWeapon.dataRef.name,
      };
      seraphicWeapon.dataRef = seraphicWeapon.customData;
    }
    seraphicWeapon.customData.value = value;
    if (this.context.autoEnableOnChange) {
      seraphicWeapon.enabled = true;
    }
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let seraphicWeapon = calcParams.party.seraphicWeapon;
    let descriptionInput = null;
    if (seraphicWeapon.dataRef.key === CUSTOM_KEY) {
      descriptionInput = (
        <Form.Control
          onChange={this.handleDescriptionChange}
          placeholder="Description"
          value={seraphicWeapon.customData.description}
        />
      );
    }

    return (
      <div>
        <Form.Group>
          <Form.Row>
            <Col xs={6}>
              <CheckboxBtn
                btnClassName="btn-sm btn-outline-secondary"
                btnVariant="outline-secondary"
                checked={seraphicWeapon.enabled}
                iconClassName="mr-0 mr-md-1"
                onChange={this.handleEnabledChange}
              >
                <WithTooltip
                  decorated={false}
                  tooltip="Seraphic weapon, matching your element."
                >
                  Seraphic
                  <span className="d-none d-md-inline"> weapon</span>
                </WithTooltip>
              </CheckboxBtn>
              <Form.Control
                as="select"
                onChange={this.handleSelectChange}
                value={seraphicWeapon.dataRef.key}
              >
                <SelectOptions hashmap={SeraphicWeapons} />
              </Form.Control>
            </Col>
            <Col xs={6}>
              <Form.Label>
                <WithTooltip tooltip="Single and charge attack DMG multiplier, if foe is weak to your element.">
                  ✞ DMG multiplier
                </WithTooltip>
              </Form.Label>
              <Form.Control
                className="no-spinner-sm"
                onChange={this.handleValueChange}
                type="number"
                value={seraphicWeapon.dataRef.value}
              />
            </Col>
          </Form.Row>
          {descriptionInput}
        </Form.Group>
      </div>
    );
  }
}

export default SeraphicWeapon;
