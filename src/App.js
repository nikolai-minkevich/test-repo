import { BrowserRouter as HashRouter, Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {
  return (
    <HashRouter>
    <Switch>
    <Route exact  path="/" component={Home} />
    <Route exact  path="/garage" component={Garage} />
    <Redirect to='/' />
    </Switch>
      </HashRouter>
  );
}

export default App;
