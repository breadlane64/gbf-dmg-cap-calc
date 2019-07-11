import React from 'react';
import { Container } from 'react-bootstrap'

// The data management (Save/Load) view.
class DataManagement extends React.Component {
  render() {
    return (
      <Container fluid={true} id="data_management">
        <p>
          Save/Load data go here.
        </p>
      </Container>
    );
  }
}

export default DataManagement;
