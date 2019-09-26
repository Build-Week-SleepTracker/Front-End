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
               <Link to="/survey">Customer Service</Link>
          </li>
          <li>
              <Link to='/contactForm'>Contact Form</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <PrivateRoute exact path="/protected" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/contactForm' component={ContactForm}/>
          <Route exact path="/survey" component={Survey} />
          <Route exact path ="/survey-rating" component ={Star} />
           
        </Switch>

    </div>
    </Router>
     </SessionsContext.Provider>
  );
}

export default App;
