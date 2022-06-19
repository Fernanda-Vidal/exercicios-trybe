import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './redux/page/Home';
import Login from './redux/page/Login';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
