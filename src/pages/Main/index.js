import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import Spinner from '../../Spinner';
import { getCollectionsArray } from '../../store';
import { promisifyLocalStorage } from '../../store/helper';
import CollectionList from './components/CollectionListItem';
import ListItem from './components/ListItem';
import './style.css';

const Main = () => {
  const history = useHistory();
  const [bookInformation, setBookInformation] = useState();
  const [offset, setOffset] = useState(0);
  const numberOfSlides = 6;

  useEffect(() => {
    async function fetchData() {
      const bookInformation = await promisifyLocalStorage(getCollectionsArray);
      setBookInformation(bookInformation.map(element => element.item).flat());
    }
    fetchData();
  }, []);

  const isRightSlideActive = offset === (bookInformation?.length || 0) - numberOfSlides;

  const onSliderIncreaseClick = () => {
    setOffset(isRightSlideActive ? offset + 1 : offset);
  };

  const onSliderDecreaseClick = () => {
    setOffset(oldState => (oldState !== 0 ? oldState - 1 : oldState));
  };

  const collectionsForCarousel = bookInformation?.slice(offset, offset + numberOfSlides);
  const bestCollections = bookInformation?.slice(-3);

  return (
    <div className="style-block container">
      <h1 className="main-page-tittle-wrapper">Last added</h1>
      <div className="style-wrapper">
        <div className={clsx('slider-arrow', !offset && 'last-slide')} onClick={onSliderDecreaseClick}>
          <ChevronCompactLeft />
        </div>
        {collectionsForCarousel?.map(element => (
          <ListItem name={element.name} author={element.author} picture={element.picture} key={element.id} />
        )) || <Spinner />}
        <div className={clsx('slider-arrow', isRightSlideActive && 'last-slide')} onClick={onSliderIncreaseClick}>
          <ChevronCompactRight />
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
        {bestCollections?.map(element => (
          <CollectionList name={element.name} id={element.id} key={element.id} picture={element.picture} />
        )) || <Spinner />}
      </div>
    </div>
  );
};

export default Main;
