import React from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// A collapsible form with a toggle button above it.
class CollapsibleForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true,
    };
  }

  render() {
    let caretIcon = "caret-square-" + (this.state.isOpen ? "down" : "right");
    return (
      <div>
        <Button
          className="d-flex mb-1 no-btn-outline"
          block
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          variant="info"
          aria-controls={this.props.formId}
          aria-expanded={this.state.isOpen}
        >
          <FontAwesomeIcon icon={["far", caretIcon]} size="lg" />
          <span className="flex-fill">{this.props.text}</span>
        </Button>
        <Collapse in={this.state.isOpen}>
          <Form id={this.props.formId}>
            {this.props.children}
          </Form>
        </Collapse>
      </div>
    );
  }
}

export default CollapsibleForm;
