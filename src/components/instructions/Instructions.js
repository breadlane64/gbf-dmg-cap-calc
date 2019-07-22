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
        <p>
          <span>Source code can be found at </span>
          <a href="https://github.com/breadlane64/gbf-dmg-cap-calc" target="_blank">https://github.com/breadlane64/gbf-dmg-cap-calc</a>
        </p>
      </Container>
    );
  }
}

export default Instructions;
