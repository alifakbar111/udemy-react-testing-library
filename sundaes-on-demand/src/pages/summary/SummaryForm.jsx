import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Popover, OverlayTrigger, Stack } from "react-bootstrap";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I Agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Stack direction="horizontal">
      <Form>
        <Form.Group className="mb-3" controlId="terms-and-conditions">
          <Form.Check
            id="checkbox"
            type="checkbox"
            label={checkboxLabel}
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isChecked}>
          Confirm Order
        </Button>
      </Form>
    </Stack>
  );
};

export default SummaryForm;
