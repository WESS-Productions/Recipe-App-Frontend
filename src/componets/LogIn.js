import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ login, deleteRecipe }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const userInfo = {
      user: { email: data.email, password: data.password }
    };

    await login(userInfo);
    // navigate('/protectedmyrecipes');
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className='login-container'>
      <br />
      <br />
      <br />

      <FormGroup>
        <Label for='email' className='login-inputs'>
          Email
        </Label>
        <Input type='email' id='email' name='email' placeholder='Enter your email' />
      </FormGroup>
      <br />

      <div className='login-line'></div>
      <br />

      <FormGroup>
        <Label for='password' className='login-inputs'>
          Password
        </Label>
        <Input type='password' id='password' name='password' placeholder='Enter your password' />
      </FormGroup>
      <br />
      <button className='button-login' block="true">login</button>
    </Form>
  );
};

export default Login;
