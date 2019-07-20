import React from 'react';
import { Form } from 'react-bootstrap';

// A select input to select a type of modifier by its key.
class ModKeySelect extends React.Component {
  render() {
    let options = [];
    for (let [key, elem] of Object.entries(this.props.modHashmap)) {
      options.push(
        <option key={key} value={key}>{elem.name}</option>
      );
    }

    return (
      <Form.Control
        as="select"
        className={this.props.className}
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
      >
        {options}
      </Form.Control>
    );
  }
}

ModKeySelect.defaultProps = {
  className: null,
  name: null,
};

export default ModKeySelect;
