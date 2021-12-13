import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCollectionsArray } from '../../store';
import { promisifyLocalStorage } from '../../store/helper';
import CollectionList from './components/CollectionListItem';
import ListItem from './components/ListItem';
import './style.css';

const Main = () => {
  const history = useHistory();
  const [bookInformation, setBookInformation] = useState([]);
  const [firstSlide, setFirstSlide] = useState(0);
  const numberOfSlides = 6;

  useEffect(() => {
    async function fetchData() {
      const bookInformation = await promisifyLocalStorage(getCollectionsArray);
      setBookInformation(bookInformation.map(element => element.item).flat());
    }
    fetchData();
  }, []);

  const onSliderIncreaseClick = () => {
    setFirstSlide(oldState => {
      return oldState !== bookInformation.length - numberOfSlides ? oldState + 1 : oldState;
    });
  };

  const onSliderDecreaseClick = () => {
    setFirstSlide(oldState => {
      return oldState !== 0 ? oldState - 1 : oldState;
    });
  };
  return (
    <div className="style-block">
      <h1 className="main-page-tittle-wrapper">Last added</h1>
      <div className="style-wrapper">
        <div className={clsx('slider-arrow', !firstSlide && 'last-slide')} onClick={onSliderDecreaseClick}>
          <ChevronCompactLeft></ChevronCompactLeft>
        </div>

        {bookInformation.slice(firstSlide, firstSlide + numberOfSlides).map(element => (
          <ListItem name={element.name} author={element.author} picture={element.picture}></ListItem>
        ))}
        <div
          className={clsx('slider-arrow', firstSlide === bookInformation.length - numberOfSlides ? 'last-slide' : '')}
          onClick={onSliderIncreaseClick}
        >
          <ChevronCompactRight></ChevronCompactRight>
        </div>
      </div>
      <div className="main-page-title-and-button-wrapper">
        <h1 className="main-page-tittle">Best collections</h1>
        <Button
          variant="secondary"
          className="main-page-btn"
          onClick={() => {
            history.push('collection');
          }}
        >
          Add collection
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
