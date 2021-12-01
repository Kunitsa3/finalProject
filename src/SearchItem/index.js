import { Button } from 'react-bootstrap';
import './style.css';

const SearchItem = ({ onUpdateSearch, searchString }) => {
  return (
    <div className="search-item-wrapper">
      <input
        className="search-item-input"
        placeholder="Search for books"
        value={searchString}
        onChange={onUpdateSearch}
      ></input>
      <Button className="search-item-button">Search</Button>
    </div>
  );
};

export default SearchItem;
