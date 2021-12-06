import { useParams } from 'react-router-dom';
import { getCollectionsArray } from '../../store';
import Book from '../Book';
import './style.css';
import CollectionItem from '../CollectionItem';
import { useEffect, useState } from 'react';
import { promisifyLocalStorage } from '../../store/helper';

const CollectionPage = () => {
  const { id } = useParams();

  const [collectionInformation, setCollectionInformation] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const data = await promisifyLocalStorage(getCollectionsArray);
      setCollectionInformation(data.find(item => item.id === id));
    }
    fetchData();
  }, []);

  console.log(collectionInformation);

  return collectionInformation ? (
    <div className="collection-page-full-wrapper">
      {
        <CollectionItem
          name={collectionInformation.name}
          description={collectionInformation.description}
          booksAmount={collectionInformation.item.length}
          id={id}
          items={collectionInformation.item}
        ></CollectionItem>
      }
      {collectionInformation.item.map(element => {
        return (
          <Book
            name={element.name}
            author={element.author}
            description={element.description}
            pictureLink={element.picture}
            id={element.id}
            collectionId={id}
          ></Book>
        );
      })}
    </div>
  ) : (
    <div className="collection-page-full-wrapper">LOADING </div>
  );
};

export default CollectionPage;
