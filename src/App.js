import { HashRouter, Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {
  return (
    <HashRouter>
    <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
    <Route path={process.env.PUBLIC_URL + '/home'} component={Home} />
    <Route path={process.env.PUBLIC_URL + "/garage"} component={Garage} />
    <Redirect to='/' />
    </Switch>
      </HashRouter>
  );
}

export default App;
