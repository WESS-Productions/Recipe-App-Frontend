import {
    Form,
    Row,
    Col,
    Label,
    Input,
    FormGroup,
    Button,
  } from 'reactstrap';
const Login = () => {
    const handleSubmit = () => {
      console.log('something')
    }
      return (
    <Form onSubmit={handleSubmit}>
    <Row className="row-cols-lg-auto g-3 align-items-center">
      <Col>
        <Label
          className="visually-hidden"
          for="exampleEmail"
        >
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter Your Email"
          type="email"
        />
      </Col>
      <Col>
        <Label
          className="visually-hidden"
          for="examplePassword"
        >
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter Your Password"
          type="password"
        />
      </Col>
      <Col>
        <FormGroup check>
          <Input
            id="exampleCheckbox"
            name="checkbox"
            type="checkbox"
          />
          <Label
            check
            for="exampleCheckbox"
          >
            Remember Me
          </Label>
        </FormGroup>
      </Col>
      <Col>
        <Button>
          Log in Here
        </Button>
      </Col>
    </Row>
    </Form>
      )
    }
export default Login