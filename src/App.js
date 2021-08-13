import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
          {/* route - массив, который содержит пропсы, см index.js в папке routing */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
