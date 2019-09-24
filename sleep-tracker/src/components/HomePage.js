import React, { useState, useEffect } from "react";
import DateList from './SessionList';
import Graph from './Graph';
// import axios from "axios";

const HomePage = () => {
    const [sessionList, setSessonList] = useState([]);
    useEffect(() => {
      getData();
    }, []);
  const getData = () => {
    axiosWithAuth()
        .get('/sessions')
        .then(res => setDateList(res.data))
        .catch(error => console.log(error));
  }
    return (
      <>
      <SessionsList sessions={sessionList} updateSessions={setSessionList} getData={getData} />
      <Graph sessions={sessions}/>
      </>
    );
  };
  
  export default HomePage;
  