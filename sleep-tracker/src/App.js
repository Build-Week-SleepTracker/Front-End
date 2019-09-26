import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import SessionsContext from './contexts/SessionContext'
import './App.css';
import ContactForm from "./components/ContactForm";
import Survey from './components/SurveyForm';
import Star from './components/SurveyRating'
import SleepJournal from './components/SleepJournal/SleepJournal'


function App() {
const [sessionList, setSessionList] = useState([])


  return (
    <SessionsContext.Provider value={{sessionList , setSessionList, }}>
    <Router>
    <div className="App">
      <div className ="header">
      <ul>
          <li>
              <Link to="/login" style={{ textDecoration: 'none'}}>Login</Link>
          </li>
          <li>
              <Link to="/protected" style={{ textDecoration: 'none'}}>Homepage</Link>
          </li> 
          <li>
              {/* journal */}
              <Link to='/journal' style={{ textDecoration: 'none' }}>Sleep Journal</Link> 
          </li>
          <li>
               {/* survey */}
               <Link to="/survey" style={{ textDecoration: 'none' }}>Customer Service</Link>
          </li>
          <li>
              <Link to='/contactForm' style={{ textDecoration: 'none' }}>Contact Form</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <PrivateRoute exact path="/protected" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/contactForm' component={ContactForm}/>
          <Route exact path="/survey" component={Survey} />
          <Route exact path ="/survey-rating" component ={Star} />
         < Route exact path ="/journal" component ={SleepJournal} />
           
        </Switch>

    </div>
    </Router>
     </SessionsContext.Provider>
  );
}

export default App;
