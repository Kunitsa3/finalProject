import { Button, Form } from 'react-bootstrap';
import './style.css';

const NewItem = ({ handleSubmit, onInputChange, onCancelClick, itemValues }) => {
  return (
    <div>
      <h1 className="new-item-title-wrapper"> Adding a new book</h1>
      <Form>
        <div className="new-item-information-wrapper">
          <Form.Group className="mb-3 new-item-input-values-wrapper" controlId="formBasicName">
            <Form.Control
              type="name"
              onChange={onInputChange}
              value={itemValues.name}
              placeholder="Name of the Book"
              name="name"
              required
            />
          </Form.Group>
        </div>

        <div className="new-item-information-wrapper">
          <Form.Group className="mb-3 new-item-input-values-wrapper" controlId="formBasicAuthor">
            <Form.Control
              type="name"
              onChange={onInputChange}
              value={itemValues.author}
              name="author"
              placeholder="Author of the Book"
              required
            />
          </Form.Group>
        </div>

        <div className="new-item-information-wrapper">
          <Form.Group className="mb-3 new-item-input-values-wrapper " controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              onChange={onInputChange}
              value={itemValues.description}
              name="description"
              placeholder="Book description"
              required
              rows={3}
            />
          </Form.Group>
        </div>

        <div className="new-item-information-wrapper">
          <Form.Group className="mb-3 new-item-input-values-wrapper" controlId="formBasicPicture">
            <Form.Control type="picture" onChange={onInputChange} value={itemValues.picture} name="picture" />
          </Form.Group>
        </div>
        <div className="collection-button-wrapper">
          <Button onClick={handleSubmit} className="collection-button" placeholder="Link to external picture">
            Submit
          </Button>
          <Button onClick={onCancelClick} className="collection-button" placeholder="Link to external picture">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewItem;
