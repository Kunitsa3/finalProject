import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';
import { routes } from './routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu></MainMenu>
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
