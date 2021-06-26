import propTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const LoginForm = ({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>
            Forget Password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};
