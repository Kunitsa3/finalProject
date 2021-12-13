import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';
import { routes } from './routing';
import { COLLECTIONS_ARRAY_KEY } from './store';
import data from './data';

function App() {
  useEffect(() => {
    if (!localStorage.getItem(COLLECTIONS_ARRAY_KEY)) {
      localStorage.setItem(COLLECTIONS_ARRAY_KEY, JSON.stringify(data));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu />
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
