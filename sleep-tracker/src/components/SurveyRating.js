import React, { useState } from "react";
import Rating from "react-rating"
import axios from "axios"



const Star = () => {
  
  const [status, setStatus] = useState([]);

  const [newMember, setNewMember] = useState({
    notes: "",
    
  });

  const handleChange = event => {
    setStatus({...newMember, [event.target.name] :event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(status);
    axios 
    .post("https://reqres.in/api/users")
      .then(res => {
        console.log(res);
        setStatus(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error:', err)
      })
    }

  
  return (
     <div className ="Star">
       <form  onSubmit={handleSubmit}>
         <h1>Rate Us</h1>
          <Rating emptySymbol="far fa-star fa-2x" fullSymbol="fa fa-star fa-2x"/>
          <textarea className="feedback" name="notes" onChange={handleChange}  placeholder="Feedback" ></textarea>
          <button>Next</button>

       </form>
        </div>
  
  )
  
}
export default Star;



