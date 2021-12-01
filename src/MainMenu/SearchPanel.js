import { Search } from 'react-bootstrap-icons';

const SearchPanel = () => {
  return (
    <div className="search-panel-wrapper">
      <Search className="search-panel-icon"></Search>
      <input className="search-panel-input" placeholder="Search"></input>
    </div>
  );
};

export default SearchPanel;
