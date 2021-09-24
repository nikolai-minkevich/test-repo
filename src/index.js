import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
import Home from "./components/Home";
import Garage from "./components/Garage";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path="/garage" component={Garage} />
          <Redirect to='/' />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
