import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignUp = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="6">
          <Form>
            <h2 className="text-center mb-4">Sign Up</h2>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input type="text" id="fullName" placeholder="Enter your full name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" id="confirmPassword" placeholder="Confirm your password" />
            </FormGroup>
            <Button color="primary" block>Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
