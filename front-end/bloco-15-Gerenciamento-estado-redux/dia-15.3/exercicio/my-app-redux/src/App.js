import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import ClientesCadastrados from './page/ClientesCadastrados';
import Register from './page/Register';

function App() {
  return (
    <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clientesCadastrados" component={ ClientesCadastrados } />
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
