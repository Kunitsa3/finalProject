import { useCallback, useState } from 'react';
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
    .map(element => (element.item.find(bookElement => bookElement.id === id) ? element.id : ''))
    .find(element => element);

  const [itemValues, setItemValues] = useState({
    name: bookInformation ? bookInformation.name : '',
    author: bookInformation ? bookInformation.author : '',
    description: bookInformation ? bookInformation.description : '',
    picture: bookInformation ? bookInformation.picture : '',
  });

  const memoizedOnInputChange = useCallback(event => {
    setItemValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const memoizedHandleSubmit = useCallback(
    event => {
      event.preventDefault();
      editBookItem({ ...itemValues, id }, collectionId);
      history.push(`/collectionPage/${collectionId}`);
    },
    [itemValues, id, collectionId, history],
  );

  return <NewItem onInputChange={memoizedOnInputChange} handleSubmit={memoizedHandleSubmit} itemValues={itemValues} />;
};

export default Item;
