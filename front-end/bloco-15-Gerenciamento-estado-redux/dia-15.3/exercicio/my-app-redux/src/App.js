import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
