import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import BaseRouter from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <BaseRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
