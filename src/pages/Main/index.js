import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getCollectionsArray } from '../../store';
import CollectionList from './components/CollectionListItem';
import ListItem from './components/ListItem';
import './style.css';

const Main = () => {
  const history = useHistory();
  let bookInformation = getCollectionsArray()
    .map(element => element.item)
    .flat();

  return (
    <div className="style-block">
      <h1 className="main-page-tittle-wrapper">Последние добавленные</h1>
      <div className="style-wrapper">
        {bookInformation.slice(0, 6).map(element => (
          <ListItem name={element.name} author={element.author} picture={element.picture}></ListItem>
        ))}
      </div>
      <div className="main-page-title-and-button-wrapper">
        <h1 className="main-page-tittle">Лучшие коллекции</h1>
        <Button
          variant="secondary"
          className="main-page-btn"
          onClick={() => {
            history.push('collection');
          }}
        >
          Добавить коллекцию
        </Button>
      </div>

      <div className="style-wrapper">
        {getCollectionsArray()
          .slice(-3)
          .map(element => (
            <CollectionList name={element.name} id={element.id} picture={element.picture}></CollectionList>
          ))}
      </div>
    </div>
  );
};

export default Main;
