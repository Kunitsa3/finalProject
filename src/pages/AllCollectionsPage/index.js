import { useEffect, useState } from 'react';
import { getCollectionsArray } from '../../store';
import { promisifyLocalStorage } from '../../store/helper';
import CollectionItem from '../CollectionItem';
import './style.css';
import clsx from 'clsx';
import Spinner from '../../Spinner';

const AllCollectionsPage = () => {
  const [bookAmount, setBookAmount] = useState(0);
  const [collectionsArray, setCollectionsArray] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await promisifyLocalStorage(getCollectionsArray);
      setCollectionsArray(data);
    }
    fetchData();
  }, []);

  const onUpdateSearch = e => {
    setBookAmount(e.target.value);
  };
  const onAllCollectionsClick = () => {
    setBookAmount(0);
  };
  const filterCollections = (collectionsArray, bookAmount) => {
    if (bookAmount === 0) return collectionsArray;
    return collectionsArray?.filter(element => element.item?.length > bookAmount);
  };
  const visibleCollections = filterCollections(collectionsArray, bookAmount);

  return (
    <div className="container">
      <div className={'filter-wrapper'}>
        <span className={clsx('filter-item', !bookAmount && 'active-filter')} onClick={onAllCollectionsClick}>
          All collections
        </span>
        <div className={clsx('amount-book-filter-wrapper filter-item', bookAmount && 'active-filter')}>
          <span>Collections of more than </span>
          <input className="amount-book-filter-input" onChange={onUpdateSearch} value={bookAmount} type="number" />
          <span> books</span>
        </div>
      </div>

      {visibleCollections?.map(element => (
        <CollectionItem
          name={element.name}
          description={element.description}
          booksAmount={element.item ? element.item.length : '0'}
          id={element.id}
          items={element.item}
          key={element.id}
        />
      )) || <Spinner />}
    </div>
  );
};

export default AllCollectionsPage;
