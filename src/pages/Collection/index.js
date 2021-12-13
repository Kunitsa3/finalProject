import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import setCollectionItem, { editCollectionItem, getCollectionsArray } from '../../store';
import Book from '../Book';
import NewItem from './NewItem';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useParams } from 'react-router-dom';
import { promisifyLocalStorage } from '../../store/helper';

const ItemModes = { edit: 'edit', view: 'view' };
const itemInterface = { name: '', author: '', description: '', picture: '', mode: ItemModes.edit };

const Collection = () => {
  const { id } = useParams();

  const history = useHistory();

  const [collectionInformation, setCollectionInformation] = useState({});
  const [collectionValues, setCollectionValues] = useState({ name: '', description: '', picture: '' });
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await promisifyLocalStorage(getCollectionsArray);

      id
        ? setCollectionInformation(data.find(item => item.id === id))
        : setCollectionInformation({ name: '', description: '', picture: '' });
    }
    fetchData();
  }, []);

  useEffect(() => {
    setCollectionValues({
      name: collectionInformation.name,
      description: collectionInformation.description,
      picture: collectionInformation.picture,
    });
  }, [collectionInformation.name, collectionInformation.description, collectionInformation.picture]);

  useEffect(() => {
    setItem(collectionInformation.item ? collectionInformation.item.reverse() : []);
  }, [collectionInformation.item]);

  const onNewItemClick = () => {
    setItem(oldItem => [itemInterface, ...oldItem]);
  };

  console.log(item);

  const onCancelClick = index => () => {
    setItem(oldItem => {
      return oldItem.filter((element, elementIndex) => elementIndex !== index);
    });
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

  const handleSubmit = event => {
    event.preventDefault();
    const newId = uuidv4();
    id
      ? editCollectionItem({ ...collectionValues, id, item })
      : setCollectionItem({ ...collectionValues, id: newId, item });
    history.push(`/collectionPage/${id || newId}`);
  };

  return (
    <div className="collection-wrapper container">
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
        <div className="collection-button-wrapper">
          <Button className="collection-button" onClick={onNewItemClick}>
            Add new book
          </Button>
          <Button type="submit" className="collection-button">
            Submit
          </Button>
        </div>

        {item.map((element, index) =>
          element.mode === ItemModes.edit ? (
            <NewItem
              handleSubmit={handleNewItemSubmit(index)}
              onInputChange={onNewItemInputChange(index)}
              onCancelClick={onCancelClick(index)}
              itemValues={element}
              key={index}
            />
          ) : (
            <div key={element.id}>
              <Book
                name={element.name}
                author={element.author}
                description={element.description}
                pictureLink={element.picture}
                id={element.id}
                collectionId={id}
              />
            </div>
          ),
        )}
      </Form>
    </div>
  );
};

export default Collection;
