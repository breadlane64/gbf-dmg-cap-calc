import React from 'react';
import { Form } from 'react-bootstrap';
import WithTooltip from 'components/common/WithTooltip'

// A single attack DMG cap up label and input field.
class SingleCapUpInput extends React.Component {
  render() {
    return (
      <>
        <Form.Label>
          <WithTooltip tooltip="Single attack DMG cap up (%)">
            Single
            <span className="d-none d-lg-inline"> cap up</span>
          </WithTooltip>
        </Form.Label>
        <Form.Control
          className="no-spinner-sm"
          name="singleCapUp"
          onChange={this.props.onChange}
          type="number"
          value={this.props.value}
        />
      </>
    );
  }
}

export default SingleCapUpInput;
