import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './Pages/About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import Experiences from "./Pages/Experiences";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact";
// import Resume from "./Pages/Resume";
import resume from "./Ashley_Chang_Resume.pdf";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <App {...props} />} />
       <Route path="/resume" render={() => <embed src={resume}  style={{width:'100%'}} type="application/pdf"/>} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
