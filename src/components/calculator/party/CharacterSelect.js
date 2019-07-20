import React from 'react';
import { Col, Form } from 'react-bootstrap';
import CalcPartyContext from '../CalcPartyContext';

// Special character id value that indicates All Characters
// is selected.
const ALL_CHARACTERS_ID = -1;

// Character selection input and buttons to add a character
// or to view a different character.
class CharacterSelect extends React.Component {
  static contextType = CalcPartyContext;

  constructor(props, context) {
    super(props, context);

    // Allow 'this' to work correctly when handling these events.
    this.handleChange = this.handleChange.bind(this);
  }

  static get ALL_CHARACTERS_ID() {
    return ALL_CHARACTERS_ID;
  }

  handleChange(event) {
    this.context.setCurCharacterId(parseInt(event.target.value));
  }

  render() {
    let calcParams = this.context.calcParams;
    let options = [
      <option key={ALL_CHARACTERS_ID} value={ALL_CHARACTERS_ID}>All characters</option>,
      <option key={calcParams.mc.id} value={calcParams.mc.id}>{calcParams.mc.name}</option>,
    ];
    for (let character of calcParams.characters) {
      options.push(<option key={character.id} value={character.id}>{character.name}</option>);
    }

    return (
      <Form>
        <Form.Group>
          <Form.Row>
            <Col sm={6}>
              <Form.Label>
                Character
              </Form.Label>
              <Form.Control
                as="select"
                onChange={this.handleChange}
                value={calcParams.setCurCharacterId}
              >
                {options}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    );
  }
}

export default CharacterSelect;
