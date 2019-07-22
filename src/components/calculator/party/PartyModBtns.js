import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckboxBtn from 'components/common/CheckboxBtn';
import CalcPartyContext from '../CalcPartyContext';

// Remove, move up, move down, and enabled buttons at the top of
// a party mod in an array, e.g. the otherMods array.
class PartyModBtns extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props, context) {
    super(props, context);

    // Allow 'this' to work correctly when handling these events.
    this.handleEnabledChange = this.handleEnabledChange.bind(this);
    this.handleMoveDownClick = this.handleMoveDownClick.bind(this);
    this.handleMoveUpClick = this.handleMoveUpClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleEnabledChange(checked) {
    let calcParams = this.context.calcParams;
    let mods = calcParams.party[this.props.partyArrayName];
    let mod = mods[this.props.index];
    mod.enabled = checked;
    this.context.setAllCalcParams(calcParams);
  }

  handleMoveDownClick(event) {
    let calcParams = this.context.calcParams;
    let mods = calcParams.party[this.props.partyArrayName];
    let index = this.props.index;
    if (index < mods.length - 1) {
      let nextMod = mods[index + 1];
      mods[index + 1] = mods[index];
      mods[index] = nextMod;
      this.context.setAllCalcParams(calcParams);
    }
  }

  handleMoveUpClick(event) {
    let calcParams = this.context.calcParams;
    let mods = calcParams.party[this.props.partyArrayName];
    let index = this.props.index;
    if (index > 0) {
      let prevMod = mods[index - 1];
      mods[index - 1] = mods[index];
      mods[index] = prevMod;
      this.context.setAllCalcParams(calcParams);
    }
  }

  handleRemoveClick(event) {
    let calcParams = this.context.calcParams;
    let mods = calcParams.party[this.props.partyArrayName];
    mods.splice(this.props.index, 1);
    this.context.setAllCalcParams(calcParams);
  }

  render() {
    let calcParams = this.context.calcParams;
    let mods = calcParams.party[this.props.partyArrayName];
    let mod = mods[this.props.index];

    return (
      <ButtonToolbar className={this.props.className}>
        <ButtonGroup className="mr-2 btn-group-sm">
          <Button onClick={this.handleRemoveClick} variant="secondary">
            <FontAwesomeIcon icon={["fas", "times"]} />
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2 btn-group-sm">
          <Button onClick={this.handleMoveUpClick} variant="secondary">
            <FontAwesomeIcon icon={["fas", "angle-up"]} />
          </Button>
          <Button onClick={this.handleMoveDownClick} variant="secondary">
            <FontAwesomeIcon icon={["fas", "angle-down"]} />
          </Button>
        </ButtonGroup>
        <ButtonGroup className="btn-group-sm">
          <CheckboxBtn
            btnClassName="btn-sm btn-outline-secondary"
            btnVariant="outline-secondary"
            checked={mod.enabled}
            iconClassName="mr-0 mr-md-1"
            onChange={this.handleEnabledChange}
          >
            <span className="d-none d-md-inline">
              Enabled
            </span>
          </CheckboxBtn>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default PartyModBtns;
