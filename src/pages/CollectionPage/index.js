import { useParams } from 'react-router-dom';
import { getCollectionsArray } from '../../store';
import Book from '../Book';
import './style.css';
import CollectionItem from '../CollectionItem';
import { useEffect, useState } from 'react';
import { promisifyLocalStorage } from '../../store/helper';
import Spinner from '../../Spinner';

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

  return (
    <div className="collection-page-full-wrapper container">
      {collectionInformation ? (
        <>
          <CollectionItem
            name={collectionInformation.name}
            description={collectionInformation.description}
            booksAmount={collectionInformation.item ? collectionInformation.item.length : '0'}
            id={id}
            items={collectionInformation.item}
          />
          {collectionInformation.item?.map(element => (
            <Book
              name={element.name}
              author={element.author}
              description={element.description}
              pictureLink={element.picture}
              id={element.id}
              collectionId={id}
              key={element.id}
            />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CollectionPage;
