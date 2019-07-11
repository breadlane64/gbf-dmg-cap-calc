import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GbfData from 'gbf/GbfData';
import GbfMath from 'gbf/GbfMath';
import ModsSection from "./mods/ModsSection";
import CapsSection from "./caps/CapsSection";
import CalcModsContext from "./CalcModsContext";
import CalcCapsContext from "./CalcCapsContext";

// The calculator view.
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calcParams: GbfData.testingCalcParams,
    };

    // Allow 'this' to work correctly when handling these callbacks.
    this.setAllCalcParams = this.setAllCalcParams.bind(this);
  }

  // Replaces all of the previous calculator params with the given params.
  // Because the existing and new params are not merged,
  // the given object must contain all of the existing, unchanged params
  // in addition to any changed params.
  setAllCalcParams(newCalcParams) {
    this.setState({ calcParams: newCalcParams })
  }

  render() {
    let calcModsContext = {
      calcParams: this.state.calcParams,
      setAllCalcParams: this.setAllCalcParams,
    };
    let calcCapsContext = {
      calcResults: GbfMath.calculateResults(this.state.calcParams),
    };

    return (
      <Container fluid id="calculator">
        <Row>
          <Col className="calc-column">
            <CalcModsContext.Provider value={calcModsContext}>
              <ModsSection />
            </CalcModsContext.Provider>
          </Col>
          <Col className="calc-column">
            <CalcCapsContext.Provider value={calcCapsContext}>
              <CapsSection />
            </CalcCapsContext.Provider>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
