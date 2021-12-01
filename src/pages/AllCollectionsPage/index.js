import { useState } from 'react';
import { getCollectionsArray } from '../../store';
import CollectionItem from '../CollectionItem';
import './style.css';

const AllCollectionsPage = () => {
  const collectionsArray = getCollectionsArray();

  const [bookAmount, setBookAmount] = useState(0);
  const onUpdateSearch = e => {
    setBookAmount(e.target.value);
  };
  const onAllCollectionsClick = () => {
    setBookAmount(0);
  };
  const filterCollections = (collectionsArray, bookAmount) => {
    if (bookAmount === 0) return collectionsArray;
    return collectionsArray.filter(element => element.item.length > bookAmount);
  };
  const visibleCollections = filterCollections(collectionsArray, bookAmount);

  return (
    <div className="all-collection-page-full-wrapper">
      <div className="filter-wrapper">
        <span className="filter-item" onClick={onAllCollectionsClick}>
          All collections
        </span>
        <div className="amount-book-filter-wrapper filter-item">
          <span>Collections of more than </span>
          <input
            className="amount-book-filter-input"
            onChange={onUpdateSearch}
            value={bookAmount}
            type="number"
          ></input>
          <span> books</span>
        </div>
      </div>

      {visibleCollections.map(element => {
        return (
          <CollectionItem
            name={element.name}
            description={element.description}
            booksAmount={element.item.length}
            id={element.id}
            items={element.item}
          ></CollectionItem>
        );
      })}
    </div>
  );
};

export default AllCollectionsPage;
