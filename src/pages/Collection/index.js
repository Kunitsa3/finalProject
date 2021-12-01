import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import setCollectionItem, { editCollectionItem, getCollectionsArray } from '../../store';
import Book from '../Book';
import NewItem from './NewItem';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useParams } from 'react-router-dom';

const ItemModes = { edit: 'edit', view: 'view' };
const itemInterface = { name: '', author: '', description: '', picture: '', mode: ItemModes.edit };

const Collection = () => {
  let { id } = useParams();
  let collectionInformation = getCollectionsArray().find(item => item.id === id);
  const [collectionValues, setCollectionValues] = useState({
    name: collectionInformation ? collectionInformation.name : '',
    description: collectionInformation ? collectionInformation.description : '',
    picture: collectionInformation ? collectionInformation.picture : '',
  });
  const [item, setItem] = useState(id ? collectionInformation.item : []);
  const history = useHistory();

  const onNewItemClick = () => {
    setItem(oldItem => oldItem.concat(itemInterface));
  };

  const onNewItemInputChange = index => event => {
    setItem(oldItem =>
      oldItem.map((element, elementIndex) =>
        elementIndex === index ? { ...element, [event.target.name]: event.target.value } : element,
      ),
    );
  };

  const handleNewItemSubmit = index => event => {
    setItem(oldItem =>
      oldItem.map((element, elementIndex) =>
        elementIndex === index ? { ...element, mode: ItemModes.view, id: uuidv4() } : element,
      ),
    );
  };

  const onInputChange = event => {
    setCollectionValues(OldValues => ({
      ...OldValues,
      [event.target.name]: event.target.value,
    }));
  };

  id = id ? id : uuidv4();

  const handleSubmit = event => {
    event.preventDefault();
    id ? editCollectionItem({ ...collectionValues, id, item }) : setCollectionItem({ ...collectionValues, id, item });
    history.push(`/collectionPage/${id}`);
  };

  return (
    <div className="collection-wrapper">
      <h1 className="collection-title-wrapper">New Collection</h1>
      <Form onSubmit={handleSubmit}>
        <div className="collection-information-wrapper">
          <p className="collection-titles-wrapper">Name of the collection</p>
          <Form.Group className="mb-3 collection-input-values-wrapper" controlId="formBasicName">
            <Form.Control type="name" onChange={onInputChange} value={collectionValues.name} name="name" required />
          </Form.Group>
        </div>

        <div className="collection-information-wrapper">
          <p className="collection-titles-wrapper">Collection description</p>
          <Form.Group className="mb-3 collection-input-values-wrapper " controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              onChange={onInputChange}
              value={collectionValues.description}
              name="description"
              required
              rows={3}
            />
          </Form.Group>
        </div>

        <div className="collection-information-wrapper">
          <p className="collection-titles-wrapper">Link to external picture</p>
          <Form.Group className="mb-3 collection-input-values-wrapper" controlId="formBasicPicture">
            <Form.Control type="picture" onChange={onInputChange} value={collectionValues.picture} name="picture" />
          </Form.Group>
        </div>
        {item.map((element, index) =>
          element.mode === ItemModes.edit ? (
            <NewItem
              handleSubmit={handleNewItemSubmit(index)}
              onInputChange={onNewItemInputChange(index)}
              itemValues={element}
            ></NewItem>
          ) : (
            <div>
              <Book
                name={element.name}
                author={element.author}
                description={element.description}
                pictureLink={element.picture}
                id={element.id}
              ></Book>
            </div>
          ),
        )}
        <div className="collection-button-wrapper">
          <Button variant="info" className="collection-button" onClick={onNewItemClick}>
            Add new book
          </Button>
          <Button variant="info" type="submit" className="collection-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Collection;
