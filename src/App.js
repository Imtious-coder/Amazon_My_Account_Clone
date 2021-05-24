import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componnents/Home/Home';
import YourOrders from './Componnents/YourOrders/YourOrders';
import Informations from './Componnents/LoginAndSecurity/Informations/Informations';
import Name from './Componnents/LoginAndSecurity/Name/Name';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/yourOrders">
          <YourOrders />
        </Route>
        <Route path="/informations">
          <Informations />
        </Route>
        <Route path="/name">
          <Name />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
