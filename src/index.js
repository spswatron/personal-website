import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Pages/About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <App {...props} />} />
      {/*<Route*/}
      {/*  path="/nucleo-icons"*/}
      {/*  render={(props) => <NucleoIcons {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  path="/landing-page"*/}
      {/*  render={(props) => <LandingPage {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  path="/profile-page"*/}
      {/*  render={(props) => <ProfilePage {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  path="/register-page"*/}
      {/*  render={(props) => <RegisterPage {...props} />}*/}
      {/*/>*/}
      <Route
        path="/about"
        render={(props) => <About {...props} />}
      />
      <Route
        path="/experiences"
        render={(props) => <Experiences {...props} />}
      />
      <Route
        path="/projects"
        render={(props) => <Projects {...props} />}
      />
      <Route
        path="/contact"
        render={(props) => <Contact {...props} />}
      />
      {/*<Route*/}
      {/*  path="/alumni"*/}
      {/*  render={(props) => <Alumni {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  path="/repertoire"*/}
      {/*  render={(props) => <Repertoire {...props} />}*/}
      {/*/>*/}
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
