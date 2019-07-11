import React from 'react';
import { Form } from 'react-bootstrap';
import WithTooltip from 'components/common/WithTooltip'

// A (single and CA) DMG cap up label and input field.
class DmgCapUpInput extends React.Component {
  render() {
    return (
      <>
        <Form.Label>
          <WithTooltip tooltip="Single and charge attack DMG caps up (%)">
            Single and CA
            <span className="d-none d-lg-inline"> caps up</span>
          </WithTooltip>
        </Form.Label>
        <Form.Control
          className="no-spinner-sm"
          name="dmgCapUp"
          onChange={this.props.onChange}
          type="number"
          value={this.props.value}
        />
      </>
    );
  }
}

export default DmgCapUpInput;
