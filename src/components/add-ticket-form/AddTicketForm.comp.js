import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange }) => {
  return (
    <Jumbotron>
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
              // value={email}
              placeholder="Subject"
              required
            />
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
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            onChange={handleOnChange}
            // value={password}

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
