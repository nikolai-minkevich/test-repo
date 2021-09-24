import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/home' component={Home} />
    <Route exact path="/garage" component={Garage} />
    <Redirect to='/' />
    </Switch>
      </BrowserRouter>
  );
}

export default App;
