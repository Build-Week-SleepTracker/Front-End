import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import SessionsContext from './contexts/SessionContext'
import './App.css';



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
               {/* contact form */}
          </li>
        </ul>
      </div>
      <Switch>
          <PrivateRoute exact path="/protected" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
           
        </Switch>

    </div>
    </Router>
     </SessionsContext.Provider>
  );
}

export default App;
