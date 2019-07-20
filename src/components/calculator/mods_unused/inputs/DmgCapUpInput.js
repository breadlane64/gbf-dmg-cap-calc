import React from 'react';
import { Form } from 'react-bootstrap';
import WithTooltip from 'components/common/WithTooltip'

// A (single and CA) DMG cap up label and input field.
class DmgCapUpInput extends React.Component {
  render() {
    let capUpClass = (this.props.isNarrow ? "d-sm-none d-lg-inline" : "");
    return (
      <>
        <Form.Label>
          <WithTooltip tooltip="Single and charge attack DMG caps up (%)">
            DMG
            <span className={capUpClass}> cap up</span>
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

DmgCapUpInput.defaultProps = {
  isNarrow: false,
};

export default DmgCapUpInput;
