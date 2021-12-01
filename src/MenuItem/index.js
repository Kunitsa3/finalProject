import { useState } from 'react';
import './style.css';

const MenuItem = ({ children, menuList }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onThreeDotsClick = () => {
    setIsMenuOpened(oldState => !oldState);
  };
  return (
    <>
      {isMenuOpened && <div className="menu-item-wrapper">{menuList}</div>}
      <div onClick={onThreeDotsClick}>{children}</div>
    </>
  );
};

export default MenuItem;
