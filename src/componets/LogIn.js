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
    <div>
     <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        <input type='submit' value="Submit" />
    </form>
    <br />
    </div>
  )
}
export default Login