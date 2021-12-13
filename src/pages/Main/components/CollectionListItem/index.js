import { Heart, HeartFill, HeartHalf } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import './style.css';

const CollectionListItem = ({ name, likesAmount, id, picture }) => {
  const history = useHistory();
  return (
    <div
      className="collection-item-wrapper"
      onClick={() => {
        history.push(`collectionPage/${id}`);
      }}
    >
      <div className="collection-item-information-wrapper">
        <span className="collection-item-text">{name}</span>
        <div className="collection-item-likes-wrapper">
          {likesAmount <= 10 ? <Heart /> : likesAmount > 25 ? <HeartFill /> : <HeartHalf />}
          <span>{likesAmount}</span>
        </div>
      </div>
      <img alt="Ничего не получилось :(" className="collection-item-background" src={picture} />
      <img alt="Ничего не получилось :(" className="collection-item-picture" src={picture} />
    </div>
  );
};

export default CollectionListItem;
