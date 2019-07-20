import React from 'react';
import { Form } from 'react-bootstrap';
import WithTooltip from 'components/common/WithTooltip'

// A CA DMG cap up label and input field.
class ChargeCapUpInput extends React.Component {
  render() {
    return (
      <>
        <Form.Label>
          <WithTooltip tooltip="Charge attack DMG cap up (%)">
            CA
            <span className="d-sm-none d-lg-inline"> cap up</span>
          </WithTooltip>
        </Form.Label>
        <Form.Control
          className="no-spinner-sm"
          name="chargeCapUp"
          onChange={this.props.onChange}
          type="number"
          value={this.props.value}
        />
      </>
    );
  }
}

export default ChargeCapUpInput;
