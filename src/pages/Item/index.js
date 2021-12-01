import { useState } from 'react';
import NewItem from './NewItem';
import { editBookItem, getCollectionsArray } from '../../store';
import './style.css';
import { useHistory, useParams } from 'react-router-dom';

const Item = () => {
  let { id } = useParams();
  const history = useHistory();
  let bookInformation = getCollectionsArray()
    .map(element => element.item)
    .flat()
    .find(element => element.id === id);

  const collectionId = getCollectionsArray()
    .map(element => {
      return element.item.find(bookElement => bookElement.id === id) ? element.id : '';
    })
    .find(element => element);

  console.log(collectionId);

  const [itemValues, setItemValues] = useState({
    name: bookInformation ? bookInformation.name : '',
    author: bookInformation ? bookInformation.author : '',
    description: bookInformation ? bookInformation.description : '',
    picture: bookInformation ? bookInformation.picture : '',
  });

  const onInputChange = event => {
    setItemValues(OldValues => ({
      ...OldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    editBookItem({ ...itemValues, id }, collectionId);
    history.push(`/collectionPage/${collectionId}`);
  };

  return <NewItem onInputChange={onInputChange} handleSubmit={handleSubmit} itemValues={itemValues}></NewItem>;
};

export default Item;
