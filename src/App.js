import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import a from '../src/styles/app.css'

const App = () => {
  return (
    <div className="app">
    <Router>
      <div>
        <Switch>
          <Route exact path ='/' component = {Home} />
        </Switch>
      </div>
      <div>
      </div>
    </Router>
    
    </div>
  
  )
}

export default App
