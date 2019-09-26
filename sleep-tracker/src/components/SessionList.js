import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";
import {Bar, Pie} from 'react-chartjs-2';

const initialSession = {
  bedtime:'',
  waketime: '',
  date:'',
  user_id: Date.now(),
  sleepquality:'',
};


const SessionList = ({ sessions, updateSession, getData }) => {
    console.log(sessions);
    const [editing, setEditing] = useState(false);
    const [sessionToEdit, setSessionToEdit] = useState(initialSession);
  console.log("session to edit", sessionToEdit)
  console.log("initial session", initialSession)
    const editSession = session => {
      setEditing(true);
      setSessionToEdit(session);
    };

    
const chartData = {
  
  labels: sessions.map(session =>{
    return session.date
  }),
  datasets: [
      {
          label: sessions.map(session => {
            if(session.sleepquality === 4) {
              return ` ${session.date} was a happy day!   you slept from: ${session.bedtime} - ${session.waketime}!`
            }
            else {
              return ""
            }
          }),
          data:sessions.map(session =>{
            return session.sleepquality
          }) ,
          backgroundColor: [
            'blue'
          ]
      }
    ]

}



    const saveEdit = e => {
        e.preventDefault();
         axiosWithAuth()
          .put(`/users/sleeps/${sessionToEdit.id}`, sessionToEdit)
          .then(res => {
            console.log(res.data)
              getData();
          })
          .catch(err => console.log(err.response));
            
      };

     const createSession = e => {
       e.preventDefault();
    console.log(sessionToEdit);
   sessionToEdit.sleepquality = parseInt(sessionToEdit.sleepquality);
     axiosWithAuth()
      .post(`/users/sleeps`, sessionToEdit)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  }

  const deleteSession = session => {
    console.log(session);
    sessionToEdit.sleepquality = parseInt(sessionToEdit.sleepquality);
     axiosWithAuth()
      .delete(`/users/sleeps/${session.id}`, session.id)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className='main-container'> 
    <div className="homepage-container">

      {!editing && (
    <form onSubmit={createSession}>
          <legend>New Sleep Session</legend>
         
          <label>
            Bed Time:
            <input type="time"
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  bedtime:e.target.value})
              }
              value={sessionToEdit.bedtime}
            />
          </label>
          <label>
            Wake Time:
            <input type="time"
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  waketime: e.target.value})
              }
              value={sessionToEdit.waketime}
            />
          </label>
          <label>
            Date:
            <input type="date"
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  date: e.target.value})
                }
            />
          </label>
          <label>
            Tired rating at bed time:
            <select name="MOB">
             <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
             <option value="">4</option>
             </select>
          </label>
          <label>
            Mood when waking:
            <select name="MOW">
             <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
             <option value="">4</option>
             </select>
            </label>
          <label>
            mood for day:
            <select type = "number" name="sleepquality"   onChange={e =>
                setSessionToEdit({ ...sessionToEdit, sleepquality: e.target.value })} >
             <option value="1" >1</option>
              <option value="2">2</option>
              <option value="3">3</option>
             <option value="4">4</option>
             </select>
       
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
        )}
        {editing && (
            <form onSubmit={saveEdit}>
            <legend>Edit Session</legend>
           
            <label>
              Bed Time:
              <input type="time"
                onChange={e =>
                  setSessionToEdit({
                    ...sessionToEdit,
                    bedtime:e.target.value})
                }
                value={sessionToEdit.bedtime}
              />
            </label>
            <label>
              Wake Time:
              <input type="time"
                onChange={e =>
                  setSessionToEdit({
                    ...sessionToEdit,
                    waketime: e.target.value})
                }
                value={sessionToEdit.waketime}
              />
            </label>
            <label>
              Date:
              <input type="date"
               
              />
            </label>
            <label>
              Tired rating at bed time:
              <select name="MOB">
               <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
               <option value="">4</option>
               </select>
            </label>
            <label>
              Mood when waking:
              <select name="MOW">
               <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
               <option value="">4</option>
               </select>
              </label>
            <label>
              mood for day:
              <select type = "number" name="sleepquality"   onChange={e =>
                  setSessionToEdit({ ...sessionToEdit, sleepquality: e.target.value })} >
               <option value="1" >1</option>
                <option value="2">2</option>
                <option value="3">3</option>
               <option value="4">4</option>
               </select>
         
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
      )} 
</div>
<div className="bottom-container"> 
    <div className="session-container">
      <p>Sessions</p>
      <div className="list">
      <ul>
        {sessions.map(session => (
          <li key={session.id} onClick={() => editSession(session)}>
            <span>
              <span className="delete" onClick={() => deleteSession(session)}>
                x
              </span>{" "}
              {session.date}
            </span>
          </li>
        ))}
 </ul>  
 </div>
 
    </div>
     <div className ="Graph">
     
     <Bar 
        data={chartData}
      />
     
      </div>
       
   </div> 
    </div>
  );
};

export default SessionList;
