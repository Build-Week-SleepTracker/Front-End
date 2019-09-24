import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

const intitialSession = {
  startTime: Date.parse(' '),
  wakeTime: Date.parse(' '),
  MOB:Number(" "),
  MOW:Number(" "),
  MOD: Number(" ")
};

const SessionList = ({ sessions, updateSession, getData }) => {
    console.log(sessions);
    const [editing, setEditing] = useState(false);
    const [sessionToEdit, setSessionToEdit] = useState(initialSession);
  console.log("session to edit", SessionToEdit)
  console.log("initial session", initialSession)
    const editSession = session => {
      setEditing(true);
      setSessionToEdit(session);
    };

    const saveEdit = e => {
        e.preventDefault();
         axiosWithAuth()
          .put(`/sessions/${sessionToEdit.id}`, sessionToEdit)
          .then(res => {
            console.log(res.data)
              getData();
          })
          .catch(err => console.log(err.response));
            
      };

     const createSession = session => {
    console.log(session);
   
     axiosWithAuth()
      .post(`/sessions/`, sessionToEdit)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  }

  const deleteDate = session => {
    console.log(session);
     axiosWithAuth()
      .delete(`/sessions/${session.id}`, session.id)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="session-wrap">
      <p>Sessions</p>
      <ul>
        {sessions.map(session => (
          <li key={session.id} onClick={() => editSession(session)}>
            <span>
              <span className="delete" onClick={() => deleteSession(session)}>
                x
              </span>{" "}
              {session.startTime}
            </span>
          </li>
        ))}
         <form onSubmit={createSession}>
          <legend>New Sleep Session</legend>
          {/* <label>
            Date:
            <input
              onChange={e =>
                setSessionToEdit({ ...SessionToEdit, date: Date.parse(e.target.value) }) //date.now
              }
              value={sessionToEdit.date}
            />
          </label> */}
          <label>
            Bed Time:
            <input
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB:e.target.value})
              }
              value={sessionToEdit.MOB}
            />
          </label>
          <label>
            Wake Time:
            <input
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: e.target.value})
              }
              value={sessionToEdit.MO}
            />
          </label>
          <label>
            Tired rating at bed time:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB:25})
              }
                    > 1 </button>
                <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 50 })
              }
                    > 2 </button>
                     <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 75 })
              }
                    > 3 </button>
               <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 100 })
              }
                    > 4 </button>
          </label>
          <label>
            Mood when waking:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 25 })
              }
                    > 1 </button>
                <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 50 })
              }
                    > 2 </button>
                     <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 75 })
              }
                    > 3 </button>
               <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 100 })
              }
                    > 4 </button>
            
          </label>
          <label>
            Average mood for day:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOD: 25 })
              }
                    > 1 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...dateToEdit,
                  MOD: 50 })
              }
                    > 2 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...dateToEdit,
                  MOD: 75 })
              }
                    > 3 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOD: 100 })
              }
                    > 4 </button>
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      </ul>
     
     
     
     
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Sleep Session</legend>
            {/* <label>
            Date:
            <input
              onChange={e =>
                setSessionToEdit({ ...SessionToEdit, date: Date.parse(e.target.value) }) //date.now
              }
              value={sessionToEdit.date}
            />
          </label> */}
          <label>
            Bed Time:
            <input
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB:e.target.value})
              }
              value={sessionToEdit.MOB}
            />
          </label>
          <label>
            Wake Time:
            <input
              onChange={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: e.target.value})
              }
              value={sessionToEdit.MO}
            />
          </label>
          <label>
            Tired rating at bed time:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB:25})
              }
                    > 1 </button>
                <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 50 })
              }
                    > 2 </button>
                     <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 75 })
              }
                    > 3 </button>
               <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOB: 100 })
              }
                    > 4 </button>
          </label>
          <label>
            Mood when waking:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 25 })
              }
                    > 1 </button>
                <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 50 })
              }
                    > 2 </button>
                     <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 75 })
              }
                    > 3 </button>
               <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOW: 100 })
              }
                    > 4 </button>
            
          </label>
          <label>
            Average mood for day:
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOD: 25 })
              }
                    > 1 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...dateToEdit,
                  MOD: 50 })
              }
                    > 2 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...dateToEdit,
                  MOD: 75 })
              }
                    > 3 </button>
            <button onClick={e =>
                setSessionToEdit({
                  ...sessionToEdit,
                  MOD: 100 })
              }
                    > 4 </button>
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )} 
      <div className="spacer" />
     
     
    </div>
  );
};

export default DateList;
