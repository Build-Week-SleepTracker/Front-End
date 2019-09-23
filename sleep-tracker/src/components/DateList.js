import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

const intitialDate = {
  date:[],
  bedTime: [],
  wakeTime: [],
  sleep:[],
  averageMood: [],
};

const DateList = ({ dates, updateDates, getData }) => {
    console.log(dates);
    const [editing, setEditing] = useState(false);
    const [dateToEdit, setDateToEdit] = useState(initialDate);
  console.log("date to edit",colorToEdit)
  console.log("initial date", initialDate)
    const editDate = date => {
      setEditing(true);
      setDateToEdit(date);
    };

    const saveEdit = e => {
        e.preventDefault();
         axiosWithAuth()
          .put(`/dates/${dateToEdit.id}`, dateToEdit)
          .then(res => {
            console.log(res.data)
              getData();
          })
          .catch(err => console.log(err.response));
            
      };

     const createDate = date => {
    console.log(date);
   
     axiosWithAuth()
      .post(`/dates/`, dateToEdit)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  }

  const deleteDate = date => {
    console.log(date);
     axiosWithAuth()
      .delete(`/dates/${date.id}`, date.id)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="session-wrap">
      <p>Dates</p>
      <ul>
        {dates.map(date => (
          <li key={date.date} onClick={() => editDate(date)}>
            <span>
              <span className="delete" onClick={() => deleteDate(date)}>
                x
              </span>{" "}
              {date.date}
            </span>
          </li>
        ))}
         <form onSubmit={createDate}>
          <legend>New Sleep Session</legend>
          <label>
            Date:
            <input
              onChange={e =>
                setDateToEdit({ ...DateToEdit, date: e.target.value })
              }
              value={dateToEdit.date}
            />
          </label>
          <label>
            Bed Time:
            <input
              onChange={e =>
                setDateToEdit({
                  ...dateToEdit,
                  bedTime: Number(e.target.value)})
              }
              value={dateToEdit.bedTime}
            />
          </label>
          <label>
            Wake Time:
            <input
              onChange={e =>
                setDateToEdit({
                  ...dateToEdit,
                  wakeTime: Number(e.target.value)})
              }
              value={dateToEdit.wakeTime}
            />
          </label>
          <label>
            Tired rating at bed time:
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button> 4 </button>
          </label>
          <label>
            Mood when waking:
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button> 4 </button>
          </label>
          <label>
            Average mood for day:
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 1 })
              }
                    > 1 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 2 })
              }
                    > 2 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 3 })
              }
                    > 3 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 4 })
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
          <label>
            Date:
            <input
              onChange={e =>
                setDateToEdit({ ...DateToEdit, date: e.target.value })
              }
              value={dateToEdit.date}
            />
          </label>
          <label>
            Bed Time:
            <input
              onChange={e =>
                setDateToEdit({
                  ...dateToEdit,
                  bedTime: Number(e.target.value)})
              }
              value={dateToEdit.bedTime}
            />
          </label>
          <label>
            Wake Time:
            <input
              onChange={e =>
                setDateToEdit({
                  ...dateToEdit,
                  wakeTime: Number(e.target.value)})
              }
              value={dateToEdit.wakeTime}
            />
          </label>
          <label>
            Tired rating at bed time:
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button> 4 </button>
          </label>
          <label>
            Mood when waking:
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button> 4 </button>
          </label>
          <label>
            Average mood for day:
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 1 })
              }
                    > 1 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 2 })
              }
                    > 2 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 3 })
              }
                    > 3 </button>
            <button onClick={e =>
                setDateToEdit({
                  ...dateToEdit,
                  averageMood: 4 })
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
