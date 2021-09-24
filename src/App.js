import { BrowserRouter as HashRouter, Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {
  return (
    <HashRouter>
    <Switch>
    <Route exact  path={process.env.PUBLIC_URL + '/'} component={Home} />
    <Route exact  path={process.env.PUBLIC_URL + "/garage"} component={Garage} />
    <Redirect to='/' />
    </Switch>
      </HashRouter>
  );
}

export default App;
