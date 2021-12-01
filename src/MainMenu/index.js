import './style.css';
import { PersonFill } from 'react-bootstrap-icons';
import SearchPanel from './SearchPanel';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const MainMenu = () => {
  const history = useHistory();
  const location = useLocation();

  const getActivePageClassName = path => {
    return clsx('main-menu-item', matchPath(location.pathname, { path: path }) && 'active');
  };

  const pages = [
    { name: 'Main page', path: '/main' },
    { name: 'Books', path: '/books' },
    { name: 'Collections', path: '/allCollectionsPage' },
  ];
  return (
    <div className="main-menu-wrapper">
      {pages.map((element, index) => {
        return (
          <p
            className={getActivePageClassName(element.path)}
            key={index}
            onClick={() => {
              history.push(element.path);
            }}
          >
            {element.name}
          </p>
        );
      })}
      <SearchPanel className="main-menu-item"></SearchPanel>
      <PersonFill className="main-menu-item"></PersonFill>
    </div>
  );
};

export default MainMenu;
