import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import SessionList from './SessionList';
import SessionsContext from '../contexts/SessionContext';
import Graph from './Graph';
// import axios from "axios";

const HomePage = () => {
    const {sessionList, setSessionList} = useContext(SessionsContext);
    useEffect(() => {
      getData();
    }, []);
    const getData = () => {
    axiosWithAuth()
        .get('/users/sleeps')
        .then(res => setSessionList(res.data))
        .catch(error => console.log(error));
    }
    return (
      <>
      <SessionList sessions={sessionList} updateSessions={setSessionList} getData={getData} />
      {/* <Graph sessions={session}/> */}
      </>
    );
  };
  
  export default HomePage;
  