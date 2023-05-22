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
    if(data.password === data.confirm_password) {
      const userInfo = {
        "user": { email: data.email, password: data.password }
      }
      signup(userInfo)
      navigate("/")
    }
    e.target.reset()  // resets the input field
  }

  return (
    <>
      <div className="sign-up">
        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <div className="form-row">
          <label>Email:</label> <input type="email" name='email' placeholder="email" />
          </div>
          <br />
          <div className="form-row">
          <label>Password:</label> <input type="password" name='password' placeholder="password" />
          </div>
          <br />
          <div className="form-row">
          <label>Confirm Password:</label> <input type="password" name='confirm_password' placeholder="password" />
          </div>
          <br />
          <input className="submit-button" type='submit' value="Login" />
        </form>
        <br />
        <div className="sign-up-words">Already registered? <a href="/signup">Login Now!</a> </div>
      </div>
    </>
  );
}

export default SignUp;
