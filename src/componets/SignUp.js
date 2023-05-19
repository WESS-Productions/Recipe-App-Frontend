import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ signup }) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    //stop the default behavior of the form.  We want to send it with fetch.
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create and object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with jwt.
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()  // resets the input field
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="6">
          <Form innerRef={formRef} onSubmit={handleSubmit}>
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
