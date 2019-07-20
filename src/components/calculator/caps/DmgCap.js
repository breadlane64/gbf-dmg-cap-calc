import React from 'react';
import { Button, Col, Collapse, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WithTooltip from 'components/common/WithTooltip'
import CustomDmg from './CustomDmg'

// Shows a single or charge attack damage cap.
class DmgCap extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isCustomOpen: false,
    };
  }

  render() {
    let dmgCap = this.props.dmgCap;
    let isSingle = this.props.isSingle;

    let className = "mb-1 dmg-cap-container ";
    className += (isSingle ? "single-dmg-cap" : "charge-dmg-cap");

    let toggleEditTooltip = null;
    let toggleEditIcon = null;
    if (this.state.isCustomOpen) {
      toggleEditTooltip = "Hide the raw and capped DMG fields.";
      toggleEditIcon = ["far", "window-close"];
    } else {
      toggleEditTooltip = "Enter your own capped DMG to compute its raw DMG or vice-versa.";
      toggleEditIcon = ["fas", "pen-square"];
    }

    let customFormId = "edit-" + (isSingle ? "single" : "charge");
    customFormId += "-cap-" + dmgCap.id;

    return (
      <div className={className}>
        <Form.Row>
          <Col className="h5 mb-0 text-right" xs={6}>
            {dmgCap.name}
          </Col>
          <Col className="d-flex" xs={6}>
            <div className="h5 mb-0 flex-fill soft-dmg-cap">
              {dmgCap.softDmgCap.toLocaleString()}
            </div>
            <div>
              <WithTooltip tooltip={toggleEditTooltip}>
                <Button
                  block
                  className={"btn-sm no-btn-outline"}
                  onClick={() => this.setState({ isCustomOpen: !this.state.isCustomOpen })}
                  variant="info"
                  aria-controls={customFormId}
                  aria-expanded={this.state.isCustomOpen}
                >
                  <FontAwesomeIcon icon={toggleEditIcon} />
                </Button>
              </WithTooltip>
            </div>
          </Col>
        </Form.Row>
        <Form.Row className="minor-info">
          <Col className="text-right" xs={6}>
            Total cap up
          </Col>
          <Col xs={6}>
            {dmgCap.totalCapMod - 100}%
          </Col>
        </Form.Row>
        <Form.Row className="minor-info">
          <Col className="text-right" xs={6}>
            Raw DMG to reach cap
          </Col>
          <Col xs={6}>
            {dmgCap.rawDmg.toLocaleString()}
          </Col>
        </Form.Row>
        <Collapse in={this.state.isCustomOpen}>
          <CustomDmg
            dmgCap={dmgCap}
            formId={customFormId}
            isSingle={isSingle}
          />
        </Collapse>
      </div>
    );
  }
}

export default DmgCap;
