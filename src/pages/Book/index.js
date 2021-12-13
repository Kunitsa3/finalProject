import { useState, memo } from 'react';
import { Button } from 'react-bootstrap';
import { Pencil, ThreeDotsVertical, Trash } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import DeleteItem from '../../DeleteItem';
import MenuItem from '../../MenuItem';
import { deleteBookItem } from '../../store';
import clsx from 'clsx';
import './style.css';
import { useSelector } from 'react-redux';

const Book = ({ name, pictureLink, author, description, id, collectionId }) => {
  const history = useHistory();
  const [isDeleteItemMenuOpened, setIsDeleteItemMenuOpened] = useState(false);
  const theme = useSelector(state => state.appConfigurations.theme);
  const onDeleteClick = () => {
    setIsDeleteItemMenuOpened(oldState => !oldState);
  };

  return (
    <div className={clsx('book-item-full-wrapper', `${theme}`)}>
      <div className="book-picture-wrapper">
        <img className="book-picture" alt="Ничего не получилось :(" src={pictureLink}></img>
      </div>
      <div className="book-information-wrapper">
        <MenuItem
          menuList={
            <>
              <div>
                <Pencil className="menu-icons-wrapper"></Pencil>
                <span
                  className="menu-item"
                  onClick={() => {
                    history.push(`/item/${id}`, { collectionId });
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
                      deleteBookItem(id, collectionId);
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
        <span className="book-title">{name}</span>
        <span className="book-author">{author}</span>
        <span className="book-description">{description}</span>
      </div>
    </div>
  );
};

export default memo(Book);
