import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// The dmg caps section of the calculator view.
class CheckboxBtn extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Allow 'this' to work correctly when handling these events.
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    let checked = (value.length > 0);
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render() {
    let icon = ["far", (this.props.checked ? "check-square" : "square")]
    let value = [];
    if (this.props.checked) {
      value.push("1");
    }
    let iconClassName = this.props.iconClassName;

    return (
      <ToggleButtonGroup
        className={this.props.className}
        onChange={this.handleChange}
        type="checkbox"
        value={value}
      >
        <ToggleButton
          className={this.props.btnClassName}
          value="1"
          variant={this.props.btnVariant}
        >
          <span className={iconClassName}>
            <FontAwesomeIcon icon={icon} />
          </span>
          {this.props.children}
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default CheckboxBtn;
