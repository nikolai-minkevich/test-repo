import { HashRouter, Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {
  return (
    <HashRouter baseurl='test-repo/build'>
    <Switch>
    <Route path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path="/garage" component={Garage} />
    <Redirect to='/' />
    </Switch>
      </HashRouter>
  );
}

export default App;
