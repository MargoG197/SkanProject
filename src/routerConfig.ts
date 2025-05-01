import { RouteObject } from 'react-router-dom';
import AuthPage from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import SearchPage from './pages/Search/Search';
const routerConfig: RouteObject[] = [
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/search',
    Component: SearchPage,
  },
  {
    path: '/login',
    Component: AuthPage,
  },
];

export default routerConfig;