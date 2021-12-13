import { Search } from 'react-bootstrap-icons';

const SearchPanel = () => {
  return (
    <div className="search-panel-wrapper">
      <Search className="search-panel-icon" />
      <input className="search-panel-input" placeholder="Search" />
    </div>
  );
};

export default SearchPanel;
