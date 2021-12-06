import Login from '../pages/Login';
import Main from '../pages/Main';
import Registration from '../pages/Registration';
import Collection from '../pages/Collection';
import Item from '../pages/Item';
import CollectionPage from '../pages/CollectionPage';
import BooksPage from '../pages/BooksPage';
import AllCollectionsPage from '../pages/AllCollectionsPage';

export const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    key: '1',
  },
  {
    path: '/main',
    component: Main,
    exact: true,
    key: '2',
  },
  {
    path: '/registration',
    component: Registration,
    exact: true,
    key: '3',
  },
  {
    path: '/collection',
    component: Collection,
    exact: true,
    key: '4',
  },
  {
    path: '/item',
    component: Item,
    exact: true,
    key: '5',
  },
  {
    path: '/collectionPage/:id',
    component: CollectionPage,
    exact: true,
    key: '6',
  },
  {
    path: '/collection/:id',
    component: Collection,
    exact: true,
    key: '7',
  },
  {
    path: '/item/:id',
    component: Item,
    exact: true,
    key: '8',
  },
  {
    path: '/books',
    component: BooksPage,
    exact: true,
    key: '9',
  },
  {
    path: '/allCollectionsPage',
    component: AllCollectionsPage,
    exact: true,
    key: '10',
  },
  {
    path: '/*',
    component: Main,
    key: '11',
  },
];
