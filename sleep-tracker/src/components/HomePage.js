import React, { useState, useEffect } from "react";
import DateList from './DateList';
import Graph from './Graph';
// import axios from "axios";

const HomePage = () => {
//     const [dayList, setDaylistList] = useState([]);
//     useEffect(() => {
//       getData();
//     }, []);
//   const getData = () => {
//     axiosWithAuth()
//         .get('/dates')
//         .then(res => setDateList(res.data))
//         .catch(error => console.log(error));
//   }
    return (
      <>
      <DateList dates={dateList} updateDates={setDateList} getData={getData} />
      <Graph dates={DateList}/>
      </>
    );
  };
  
  export default HomePage;
  