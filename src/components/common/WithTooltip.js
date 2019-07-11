import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Text with a tooltip.
class WithTooltip extends React.Component {
  render() {
    return (
      <span>
        <OverlayTrigger
          placement={this.props.placement}
          overlay={
            <Tooltip>{this.props.tooltip}</Tooltip>
          }
        >
          <span className="has-tooltip">{this.props.children}</span>
        </OverlayTrigger>
      </span>
    );
  }
}

WithTooltip.defaultProps = {
  placement: "top",
};

export default WithTooltip;
