import { Button, Form } from 'react-bootstrap';
import './style.css';

const NewItem = ({ handleSubmit, onInputChange, itemValues }) => {
  return (
    <div className="item-wrapper container">
      <h1 className="item-title-wrapper">New Book</h1>
      <Form onSubmit={handleSubmit}>
        <div className="item-information-wrapper">
          <p className="item-titles-wrapper">Name of the Book</p>
          <Form.Group className="mb-3 item-input-values-wrapper" controlId="formBasicName">
            <Form.Control type="name" onChange={onInputChange} value={itemValues.name} name="name" required />
          </Form.Group>
        </div>

        <div className="item-information-wrapper">
          <p className="item-titles-wrapper">Author of the Book</p>
          <Form.Group className="mb-3 item-input-values-wrapper" controlId="formBasicAuthor">
            <Form.Control type="name" onChange={onInputChange} value={itemValues.author} name="author" required />
          </Form.Group>
        </div>

        <div className="item-information-wrapper">
          <p className="item-titles-wrapper">Book description</p>
          <Form.Group className="mb-3 item-input-values-wrapper " controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              onChange={onInputChange}
              value={itemValues.description}
              name="description"
              required
              rows={3}
            />
          </Form.Group>
        </div>

        <div className="item-information-wrapper">
          <p className="item-titles-wrapper">Link to external picture</p>
          <Form.Group className="mb-3 item-input-values-wrapper" controlId="formBasicPicture">
            <Form.Control type="picture" onChange={onInputChange} value={itemValues.picture} name="picture" />
          </Form.Group>
        </div>
        <div className="item-button-wrapper">
          <Button variant="info" size="lg" type="submit" className="item-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewItem;
