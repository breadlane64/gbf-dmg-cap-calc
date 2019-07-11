import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'fontAwesomeLibrary';
import Calculator from './components/calculator/Calculator';
import Instructions from './components/instructions/Instructions';
import DataManagement from './components/data_management/DataManagement';

function App() {
  return (
    <div id="app">
      <Tabs defaultActiveKey="calculator" id="top-tabs-menu">
        <Tab eventKey="calculator" title="Calculator">
          <Calculator />
        </Tab>
        <Tab eventKey="instructions" title="Instructions">
          <Instructions />
        </Tab>
        <Tab eventKey="data_management" title="Save/Load">
          <DataManagement />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
