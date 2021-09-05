import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Form,
  Fade,
  OverlayTrigger,
  Tooltip,
  Popover,
} from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export default function PatientForm() {
  const [patientDetails, setPatientDetails] = useState({
    height: 0,
    weight: 0,
    sex: "O",
    activity: 2,
  });

  const [sliderValue, setSliderValue] = useState(50);

  const handleInput = (e) => {
    switch (e.target.name) {
      case "value":
        break;

      default:
        break;
    }
  };

  const renderActivityLevel = (currentVal) => {
    if (currentVal <= 25) {
      return (
        <Badge pill bg="danger" className="m-1">
          Low Activity
        </Badge>
      );
    } else if (currentVal > 25 && currentVal <= 50) {
      return (
        <Badge pill bg="info">
          Light Activity
        </Badge>
      );
    } else if (currentVal > 50 && currentVal <= 75) {
      return (
        <Badge pill bg="secondary" className="m-1">
          Moderate Activity
        </Badge>
      );
    } else if (currentVal > 75) {
      return (
        <Badge pill bg="primary" className="m-1">
          Heavy Activity
        </Badge>
      );
    }
  };

  const renderActivityToolTip = (props) => {
    <Tooltip id="activity-tooltip" {...props}>
      Further details about how to diagnose activity level
    </Tooltip>;
  };

  const submitPatientDetails = () => {};

  const popover = (
    <Popover id="activity-popover-basic">
      <Popover.Header as="h3">Diagnosing Activity Level</Popover.Header>
      <Popover.Body>Here's how you should do it</Popover.Body>
    </Popover>
  );

  return (
    <Container fluid className="text-center w-50">
      <Row>
        <h1 style={{ marginTop: "50%" }}>Enter Patient Information</h1>
      </Row>
      <Row>
        <Form>
          <Form.Group className="m-2 w-50 m-auto" controlId="formPatientHeight">
            <Form.Label>Height:</Form.Label>
            <Form.Control
              name="heightFeet"
              type="number"
              placeholder="Feet"
              min={0}
            />
            <Form.Control
              name="heightInches"
              type="number"
              placeholder="Inches"
              min={0}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 w-50 m-auto"
            controlId="formPatientWeight"
          >
            <Form.Label>Weight:</Form.Label>
            <Form.Control
              name="weightLbs"
              type="number"
              min={0}
              placeholder="lbs"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPatientSex">
            <Form.Label className="d-block">Sex</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="M"
              name="group1"
              id="inline-radio-1"
            />
            <Form.Check
              inline
              type="radio"
              label="F"
              name="group1"
              id="inline-radio-2"
            />
          </Form.Group>

          <Form.Group>
            <Row>
              <Col></Col>
              <Col>
                <Form.Label className="d-block">Activity Level:</Form.Label>
              </Col>
              <Col>
                <OverlayTrigger
                  trigger="hover"
                  placement="right"
                  overlay={popover}
                >
                  <Badge>More Info</Badge>
                </OverlayTrigger>
              </Col>
              <Col></Col>
            </Row>

            <RangeSlider
              value={sliderValue}
              min={0}
              max={100}
              step={1}
              tooltip="off"
              onChange={(e) => setSliderValue(e.target.value)}
            />
            <Form.Text className="d-block mb-3">
              {renderActivityLevel(sliderValue)}
            </Form.Text>
          </Form.Group>

          <Form.Group className="p-2">
            <Button
              variant="primary"
              name="submit"
              type="submit"
              onPress={submitPatientDetails}
            >
              Calculate Calorie Range
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}
