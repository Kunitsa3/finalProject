import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const FunctionalButtonUp = () => {
  const [number, setNumber] = useState(0);

  const NextNumber = () => {
    setNumber(oldNumber => oldNumber + 1);
  };

  return (
    <>
      <h1>Ваше число - {number} </h1>
      <Button onClick={NextNumber}>Увеличить число</Button>
    </>
  );
};

export default FunctionalButtonUp;
