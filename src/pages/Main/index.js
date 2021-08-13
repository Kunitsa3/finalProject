import { ListGroup } from 'react-bootstrap';
import { getItem } from '../../types';
import './style.css';

const itemsParams = [
  ['123', 'name1'],
  ['234', 'name2'],
  ['345', 'name3'],
  ['456', 'name4'],
  ['567', 'name5'],
];
const items = itemsParams.map(item => getItem(...item));

const Main = () => {
  return (
    <div className="login-wrapper">
      <ListGroup>
        {items.map(item => {
          return <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
};

export default Main;
