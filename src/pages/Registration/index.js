import { Button } from 'react-bootstrap';
import { PersonFill, Envelope, Lock } from 'react-bootstrap-icons';
import { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './style.css';

const Registration = () => {
  const [registrationValues, setRegistrationValues] = useState({
    name: '',
    login: '',
    password: '',
    secondPassword: '',
  });

  const onInputChange = event => {
    setRegistrationValues(oldState => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(registrationValues);
  };

  return (
    <div className="registration-form-wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="title-wrapper">Sign Up and start reading!</h1>
        <div className="input-values-wrapper">
          <InputGroup className="mb-3 input-form-wrapper">
            <PersonFill className="input-label"></PersonFill>
            <FormControl
              placeholder="Full name"
              aria-label="Full name"
              aria-describedby="basic-addon1"
              value={registrationValues.name}
              onChange={onInputChange}
              name="name"
              type="name"
              required
            />
          </InputGroup>

          <InputGroup className="mb-3 input-form-wrapper">
            <Envelope className="input-label"></Envelope>
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              value={registrationValues.login}
              onChange={onInputChange}
              name="login"
              type="login"
              required
            />
          </InputGroup>

          <InputGroup className="mb-3 input-form-wrapper">
            <Lock className="input-label"></Lock>
            <FormControl
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={registrationValues.password}
              onChange={onInputChange}
              name="password"
              type="password"
              required
            />
          </InputGroup>

          <InputGroup className="mb-3 input-form-wrapper">
            <Lock className="input-label"></Lock>
            <FormControl
              placeholder="Confirm your password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={registrationValues.secondPassword}
              onChange={onInputChange}
              name="secondPassword"
              type="password"
              required
            />
          </InputGroup>
          <div className="sign-up-button">
            <Button variant="secondary" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
