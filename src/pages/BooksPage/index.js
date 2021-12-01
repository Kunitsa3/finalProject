import Book from '../Book';
import { getCollectionsArray } from '../../store';
import './style.css';
import SearchItem from '../../SearchItem';
import { useState } from 'react';

const BooksPage = () => {
  const booksInformation = getCollectionsArray()
    .map(element => element.item)
    .flat();

  const [searchString, setSearchString] = useState('');

  const onUpdateSearch = e => {
    setSearchString(e.target.value);
  };

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
      <SearchItem onUpdateSearch={onUpdateSearch} searchString={searchString}></SearchItem>
      {visibleBooksInformation.map(element => {
        return (
          <Book
            name={element.name}
            author={element.author}
            description={element.description}
            pictureLink={element.picture}
            key={element.id}
          ></Book>
        );
      })}
    </div>
  );
};

export default BooksPage;
