import Book from '../Book';
import { getCollectionsArray } from '../../store';
import { promisifyLocalStorage } from '../../store/helper';
import './style.css';
import SearchItem from '../../SearchItem';
import { useCallback, useEffect, useMemo, useState } from 'react';

const BooksPage = () => {
  const [searchString, setSearchString] = useState('');
  const [booksInformation, setBooksInformation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await promisifyLocalStorage(getCollectionsArray);
      setBooksInformation(data.map(element => element.item).flat());
    }
    fetchData();
  }, []);

  const memoizedOnUpdateSearch = useCallback(e => {
    setSearchString(e.target.value);
  }, []);

  const searchEmp = (bookInformation, searchString) => {
    if (searchString === 0) {
      return bookInformation;
    }
    return bookInformation.filter(element => {
      return (
        element.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        element.author.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        element.description.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      );
    });
  };

  const visibleBooksInformation = searchEmp(booksInformation, searchString);

  return (
    <div className="books-page-wrapper">
      <SearchItem onUpdateSearch={memoizedOnUpdateSearch} searchString={searchString}></SearchItem>
      {visibleBooksInformation.map(element => {
        return (
          <Book
            name={element.name}
            author={element.author}
            description={element.description}
            pictureLink={element.picture}
            key={element.id}
            id={element.id}
          ></Book>
        );
      })}
    </div>
  );
};

export default BooksPage;
