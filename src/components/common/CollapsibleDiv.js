import React from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// A collapsible form with a toggle button above it.
class CollapsibleDiv extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: this.props.isInitiallyOpen,
    };
  }

  render() {
    let caretIcon = "caret-square-" + (this.state.isOpen ? "down" : "right");
    return (
      <div className={this.props.className}>
        <Button
          block
          className="d-flex mb-1 no-btn-outline"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          variant="info"
          aria-controls={this.props.formId}
          aria-expanded={this.state.isOpen}
        >
          <FontAwesomeIcon className="mr-1" icon={["far", caretIcon]} size="lg" />
          <span className="flex-fill">{this.props.text}</span>
        </Button>
        <Collapse in={this.state.isOpen}>
          <div id={this.props.collapsibleId}>
            {this.props.children}
          </div>
        </Collapse>
      </div>
    );
  }
}

CollapsibleDiv.defaultProps = {
  isInitiallyOpen: true,
};

export default CollapsibleDiv;
