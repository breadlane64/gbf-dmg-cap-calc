import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Text with a tooltip.
class WithTooltip extends React.Component {
  render() {
    let spanClass = "has-tooltip";
    if (this.props.decorated) {
      spanClass += " has-tooltip-decorated";
    }

    return (
      <OverlayTrigger
        placement={this.props.placement}
        overlay={
          <Tooltip>{this.props.tooltip}</Tooltip>
        }
      >
        <span className={spanClass}>{this.props.children}</span>
      </OverlayTrigger>
    );
  }
}

WithTooltip.defaultProps = {
  decorated: true,
  placement: "top",
};

export default WithTooltip;
