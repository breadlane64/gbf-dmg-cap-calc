import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GbfData from 'gbf/GbfData';
import GbfMath from 'gbf/GbfMath';
import CalcCapsContext from "./CalcCapsContext";
import CalcPartyContext from "./CalcPartyContext";
import CapsSection from "./caps/CapsSection";
import CharacterSelect from "./party/CharacterSelect";
import PartySection from "./party/PartySection";

// The calculator view.
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calcParams: GbfData.defaultCalcParams,
      curCharacterId: CharacterSelect.ALL_CHARACTERS_ID,
    };

    // Allow 'this' to work correctly when handling these callbacks.
    this.setAllCalcParams = this.setAllCalcParams.bind(this);
    this.setCurCharacterId = this.setCurCharacterId.bind(this);
  }

  // Replaces all of the previous calculator params with the given params.
  // Because the existing and new params are not merged,
  // the given object must contain all of the existing, unchanged params
  // in addition to any changed params.
  setAllCalcParams(newCalcParams) {
    this.setState({ calcParams: newCalcParams });
  }

  // Sets the id of the character currently being edited,
  // or the special id for the All Characters form.
  setCurCharacterId(id) {
    this.setState({ curCharacterId: id });
  }

  render() {
    let calcPartyContext = {
      calcParams: this.state.calcParams,
      curCharacterId: this.state.curCharacterId,
      autoEnableOnChange: true,
      setAllCalcParams: this.setAllCalcParams,
      setCurCharacterId: this.setCurCharacterId,
    };
    let calcCapsContext = {
      calcResults: GbfMath.calculateResults(this.state.calcParams),
    };
    console.log(this.state.calcParams); // TEMP

    return (
      <Container fluid id="calculator">
        <Row>
          <Col className="calc-column" xs={6}>
            <div className="inner-calc-column">
              <CalcPartyContext.Provider value={calcPartyContext}>
                <PartySection />
              </CalcPartyContext.Provider>
            </div>
          </Col>
          <Col className="calc-column caps-column" xs={6}>
            <div className="inner-calc-column">
              <CalcCapsContext.Provider value={calcCapsContext}>
                <CapsSection />
              </CalcCapsContext.Provider>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
