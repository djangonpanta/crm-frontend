import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import propTypes from "prop-types";
import "./addTicket.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  return (
    <Jumbotron className=" add-new-ticket bg-light">
      <h1 className="text-info text-center">Addd New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              onChange={handleOnChange}
              value={formData.subject}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              value={formData.date}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            onChange={handleOnChange}
            value={formData.detail}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formData: propTypes.object.isRequired,
  formDataError: propTypes.object.isRequired,
};
