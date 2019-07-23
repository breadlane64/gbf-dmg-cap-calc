import React from 'react';
import { Form } from 'react-bootstrap';
import { CUSTOM_KEY } from 'gbf/data/DataUtils'

// A description input field.
// Visible iff the given hashmap key is CUSTOM_KEY.
class DescriptionInput extends React.Component {
  render() {
    // If the selected key is not CUSTOM_KEY, then do not show
    // the description field.
    if (this.props.selectedKey !== CUSTOM_KEY) {
      return null;
    }

    return (
      <Form.Control
        name="description"
        onChange={this.props.onChange}
        placeholder="Description"
        value={this.props.value}
      />
    );
  }
}

DescriptionInput.defaultProps = {
  value: "",
};

export default DescriptionInput;
