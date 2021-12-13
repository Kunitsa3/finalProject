import './style.css';
import { BrightnessHighFill, MoonFill, PersonFill } from 'react-bootstrap-icons';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/redux';

const MainMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const theme = useSelector(state => state.appConfigurations.theme);
  const dispatch = useDispatch();

  const onChangeThemeClick = () => dispatch(changeTheme(theme === 'white' ? 'dark' : 'white'));

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
      {pages.map((element, index) => (
        <p
          className={getActivePageClassName(element.path)}
          key={index}
          onClick={() => {
            history.push(element.path);
          }}
        >
          {element.name}
        </p>
      ))}
      {/* <SearchPanel className="main-menu-item"></SearchPanel> */}
      {theme !== 'white' ? (
        <BrightnessHighFill className="main-menu-item" onClick={onChangeThemeClick} />
      ) : (
        <MoonFill className="main-menu-item" onClick={onChangeThemeClick} />
      )}
      <PersonFill className="main-menu-item" />
    </div>
  );
};

export default MainMenu;
