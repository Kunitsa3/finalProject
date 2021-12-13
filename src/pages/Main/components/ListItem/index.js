import { memo } from 'react';
import './style.css';

const ListItem = ({ name, author, picture }) => {
  return (
    <div className="list-item-fool-wrapper">
      <div className="list-item-wrapper">
        <img alt="Ничего не получилось :(" className="list-item-background" src={picture} />
      </div>
      <div>
        <p className="list-item-name">{name}</p>
        <p className="list-item-author">{author}</p>
      </div>
      {/* <div className="list-item-likes-information">
        <Heart className="list-item-likes"></Heart>
        <p className="list-item-likes-number">238</p>
      </div> */}
    </div>
  );
};

export default memo(ListItem);
