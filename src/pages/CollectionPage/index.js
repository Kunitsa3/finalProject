import { useParams } from 'react-router-dom';
import { getCollectionsArray } from '../../store';
import Book from '../Book';
import './style.css';
import CollectionItem from '../CollectionItem';

const CollectionPage = () => {
  let { id } = useParams();
  let collectionInformation = getCollectionsArray().find(item => item.id === id);

  return (
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
  );
};

export default CollectionPage;
