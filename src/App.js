import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";

import './App.css';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact  path="/" component={Home} />
    <Route exact  path="/garage" component={Garage} />
    <Redirect to='/' />
    </Switch>
      </Router>
  );
}

export default App;
