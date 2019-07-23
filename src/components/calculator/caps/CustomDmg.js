import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { parseNumericInput } from 'components/Utils'
import WithTooltip from 'components/common/WithTooltip'
import GbfMath from 'gbf/GbfMath'

// Shows a single or charge attack damage cap.
class CustomDmg extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customRawDmg: 0,
      customCappedDmg: 0,
      wasRawDmgChangedLast: true,
    };

    // Allow 'this' to work correctly when handling these events.
    this.handleCustomCappedDmgChange = this.handleCustomCappedDmgChange.bind(this);
    this.handleCustomRawDmgChange = this.handleCustomRawDmgChange.bind(this);
  }

  handleCustomCappedDmgChange(event) {
    let value = parseFloat(event.target.value);
    if (!isFinite(value)) {
      // Ignore strings that are not finite numbers.
      return;
    }
    this.setState({
      customCappedDmg: value,
      wasRawDmgChangedLast: false,
    });
  }

  handleCustomRawDmgChange(event) {
    let oldValue = this.state.customRawDmg;
    let value = parseNumericInput(event.target.value, oldValue);
    if (value !== oldValue) {
      this.setState({
        customRawDmg: value,
        wasRawDmgChangedLast: true,
      });
    }
  }

  render() {
    let dmgCap = this.props.dmgCap;
    let formId = this.props.formId;
    let isSingle = this.props.isSingle;

    // Determine whether to calculate the custom damage from the raw damage
    // or vice-versa.
    let customRawDmg = 0;
    let customCappedDmg = 0;
    if (this.state.wasRawDmgChangedLast) {
      customRawDmg = this.state.customRawDmg;
      customCappedDmg = GbfMath.cappedDmg(customRawDmg, dmgCap.totalCapMod, dmgCap.capTiersArray);
    } else {
      customCappedDmg = this.state.customCappedDmg;
      customRawDmg = GbfMath.rawDmgToReachCappedDmg(customCappedDmg, dmgCap.totalCapMod, dmgCap.capTiersArray);
    }

    return (
      <Form className={this.props.className} id={formId}>
        <Form.Row>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Enter raw DMG here to calculate the resulting capped DMG.">
                Raw DMG
              </WithTooltip>
            </Form.Label>
            <Form.Control
              className="no-spinner-sm"
              onChange={this.handleCustomRawDmgChange}
              type="number"
              value={customRawDmg}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>
              <WithTooltip tooltip="Enter capped DMG here to calculate the raw DMG needed to reach it.">
                Capped DMG
              </WithTooltip>
            </Form.Label>
            <Form.Control
              className="no-spinner-sm"
              onChange={this.handleCustomCappedDmgChange}
              type="number"
              value={customCappedDmg}
            />
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default CustomDmg;
