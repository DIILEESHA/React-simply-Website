import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import a from "../src/styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/menu' component={Menu}/>
        </Switch>
        <br/>
        <Footer/>
 
      </Router>

    </div>
  );
};

export default App;
