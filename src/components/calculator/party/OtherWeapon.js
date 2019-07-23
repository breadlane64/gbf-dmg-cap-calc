import React from 'react';
import { Col, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelectOptions from 'components/common/SelectOptions';
import WithTooltip from 'components/common/WithTooltip'
import WeaponTypes from 'gbf/data/weapons/Types'
import CalcPartyContext from '../CalcPartyContext';
import PartyModBtns from './PartyModBtns';

// Inputs for a weapon in the other weapons array.
class OtherWeapon extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props, context) {
    super(props, context);

    // Allow 'this' to work correctly when handling these events.
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleDescriptionChange(event) {
    let calcParams = this.context.calcParams;
    let weapon = calcParams.party.otherWeapons[this.props.index];
    let weaponType = WeaponTypes[weapon.data.key];
    if (weaponType.canHaveDescription) {
      weapon.data.description = event.target.value;
      this.context.setAllCalcParams(calcParams);
    }
  }

  handleSelectChange(event) {
    let calcParams = this.context.calcParams;
    let weapon = calcParams.party.otherWeapons[this.props.index];
    weapon.data.key = event.target.value;
    if (this.context.autoEnableOnChange) {
      weapon.enabled = true;
    }
    this.context.setAllCalcParams(calcParams);
  }

  handleValueChange(event) {
    let calcParams = this.context.calcParams;
    let weapon = calcParams.party.otherWeapons[this.props.index];
    let value = parseFloat(event.target.value);
    if (isFinite(value)) {
      weapon.data.value = value;
      if (this.context.autoEnableOnChange) {
        weapon.enabled = true;
      }
      this.context.setAllCalcParams(calcParams);
    }
  }

  render() {
    let calcParams = this.context.calcParams;
    let index = this.props.index;
    let weapon = calcParams.party.otherWeapons[index];
    let weaponType = WeaponTypes[weapon.data.key];
    let descriptionInput = null;
    if (weaponType.canHaveDescription) {
      descriptionInput = (
        <Form.Control
          onChange={this.handleDescriptionChange}
          placeholder="Description"
          value={weapon.data.description}
        />
      );
    }

    return (
      <div>
        <Form.Group>
          <Form.Row>
            <Col xs={6}>
              <PartyModBtns
                index={index}
                partyArrayName="otherWeapons"
              />
              <Form.Control
                as="select"
                onChange={this.handleSelectChange}
                value={weapon.data.key}
              >
                <SelectOptions hashmap={WeaponTypes} />
              </Form.Control>
            </Col>
            <Col xs={6}>
              <Form.Label>
                <WithTooltip tooltip={weaponType.valueTooltip}>
                  {weaponType.valueLabel}
                </WithTooltip>
              </Form.Label>
              <Form.Control
                className="no-spinner-sm"
                onChange={this.handleValueChange}
                type="number"
                value={weapon.data.value}
              />
            </Col>
          </Form.Row>
          {descriptionInput}
        </Form.Group>
      </div>
    );
  }
}

export default OtherWeapon;
