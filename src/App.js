import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ='/' component = {Home} />
        </Switch>
      </div>
    </Router>
  
  )
}

export default App
