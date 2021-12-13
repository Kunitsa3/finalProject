import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Pencil, ThreeDotsVertical, Trash } from 'react-bootstrap-icons';
import { useHistory, useLocation } from 'react-router-dom';
import DeleteItem from '../../DeleteItem';
import MenuItem from '../../MenuItem';
import { deleteCollectionItem } from '../../store';
import './style.css';

const CollectionItem = ({ name, description, items, booksAmount, id }) => {
  const history = useHistory();
  const location = useLocation();
  const [isDeleteItemMenuOpened, setIsDeleteItemMenuOpened] = useState(false);
  const onDeleteClick = () => {
    setIsDeleteItemMenuOpened(oldState => !oldState);
  };

  return (
    <div className="collection-page-information-wrapper">
      <div className="collection-title-wrapper">
        <h1
          className={
            location.pathname === `/collectionPage/${id}` ? 'collection-title' : 'collection-title available-for-click'
          }
          onClick={() => {
            if (location.pathname !== `/collectionPage/${id}`) history.push(`collectionPage/${id}`);
          }}
        >
          {name}
        </h1>
        <h2 className="number-of-books-wrapper">{booksAmount || '0'} books</h2>
      </div>
      <MenuItem
        menuList={
          <>
            <div>
              <Pencil className="menu-icons-wrapper"></Pencil>
              <span
                className="menu-item"
                onClick={() => {
                  history.push(`/collection/${id}`);
                }}
              >
                Edit
              </span>
            </div>
            <div>
              <Trash className="menu-icons-wrapper"></Trash>
              <span className="menu-item" onClick={onDeleteClick}>
                Delete
              </span>
            </div>
          </>
        }
      >
        <ThreeDotsVertical className="three-dots"></ThreeDotsVertical>
      </MenuItem>
      {isDeleteItemMenuOpened && (
        <DeleteItem
          deleteList={
            <>
              <span className="delete-item-text">Are you sure you want to delete the collection?</span>
              <div className="buttons-wrapper">
                <Button
                  variant="light"
                  className="delete-item-btn"
                  onClick={() => {
                    deleteCollectionItem(id);
                    history.push(`/main`);
                  }}
                >
                  Yes
                </Button>
                <Button variant="primary" className="delete-item-btn" onClick={onDeleteClick}>
                  No
                </Button>
              </div>
            </>
          }
        ></DeleteItem>
      )}
      <span className="collection-page-description">{description}</span>
      <img
        className="collection-item-background"
        alt="Ничего не получилось :("
        src={items ? items[0].picture : 'https://www.livelib.ru/book/1000402963-teoriya-vsego-stiven-hoking'}
      ></img>{' '}
      <div className="collection-page-book-wrapper">
        {items
          ?.map(element => {
            return (
              <img
                className="collection-page-book-picture"
                alt="Ничего не получилось :("
                src={element.picture}
                key={element.id}
              ></img>
            );
          })
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default CollectionItem;
