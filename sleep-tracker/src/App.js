import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import SessionsContext from './contexts/SessionContext'
import './App.css';
import ContactForm from "./components/ContactForm";



function App() {
const [sessionList, setSessionList] = useState([])


  return (
    <SessionsContext.Provider value={{sessionList , setSessionList, }}>
    <Router>
    <div className="App">
      <div className ="header">
      <ul>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link to="/protected">Homepage</Link>
          </li> 
          <li>
              {/* journal */}
          </li>
          <li>
               {/* survey */}
          </li>
          <li>
              <Link to='/contactForm'>Contact Form</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <Route exact path="/protected" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
          <Route exact path='/contactForm' component={ContactForm}/>
           
        </Switch>

    </div>
    </Router>
     </SessionsContext.Provider>
  );
}

export default App;
