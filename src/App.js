import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/menu' component={Menu}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <br/>
        <Footer/>
 
      </Router>

    </div>
  );
};

export default App;
