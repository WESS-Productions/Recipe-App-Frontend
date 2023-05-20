import {
  Form,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Login = ({ login, deleteRecipe}) => {

  const navigate = useNavigate()
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo)
    navigate("/")
    e.target.reset()
  }

  return(
    <Form ref={formRef} onSubmit={handleSubmit} className='login-container'>
      <br></br>
      <br></br>
      <br></br>

            <FormGroup>
              <Label for="email" className='login-inputs'>Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <br></br>
            
            <div className='login-line'></div>
            <br></br>
            <FormGroup>
              <Label for="password" className='login-inputs'>Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <br></br>
            <button className='button-login' block>login</button>
          </Form>
  )
}
export default Login