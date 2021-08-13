import Login from '../pages/Login';
import Main from '../pages/Main';

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
];
