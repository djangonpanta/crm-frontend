import React from "react";
import propType from "prop-types";
import { Form, Button } from "react-bootstrap";
export const UpdateTicket = ({ handleOnChange, msg, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your message or update the ticket</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};
UpdateTicket.propTypes = {
  handleOnChange: propType.func.isRequired,
  handleOnSubmit: propType.func.isRequired,
  msg: propType.string.isRequired,
};
