import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './style.css';

const Login = () => {
  const [loginValues, setLoginValues] = useState({ login: '', password: '' });

  const onInputChange = event => {
    setLoginValues(oldState => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(loginValues);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={loginValues.login}
            onChange={onInputChange}
            name="login"
            type="email"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            value={loginValues.password}
            onChange={onInputChange}
            name="password"
            type="password"
            required
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
