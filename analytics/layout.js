// components/layout.js
import React from "react";
import { initGA, logPageView } from "./analytics";
export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}