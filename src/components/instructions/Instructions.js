import React from 'react';
import { Container } from 'react-bootstrap'

// The instructions view.
class Instructions extends React.Component {
  render() {
    return (
      <Container fluid={true} id="instructions">
        <p>
          Instructions go here.
        </p>
      </Container>
    );
  }
}

export default Instructions;
