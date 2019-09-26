import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from "axios";

import {Link } from 'react-router-dom';

const Survey =({errors, touched, status}) => {

  // const initialSurvey = {
  //   Name: "",
  //   Age: "",
  //   Email: "",
  //   Question1: "",
  //   Question2: ""
  // }

  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    if(status){
      setSurvey([...survey, status])
    }
  },[status])

  return (
     <div className="wrapper-surveyForm">

        <div className= 'survey-container'>
            <div className ='top-survey'>
              <h1>Hello there!</h1>
                <h3>To help you get the best sleep, we need to know a couple of things about you.</h3>
            </div>
            <Form className="survey-form">
              {touched.Name && errors.Name && <p className='survey-form-errors'>{errors.Name}</p>}
              <Field className='survey_name' type="text" name="Name" placeholder="Name" />
              
              {touched.Age && errors.Name && <p className='survey-form-errors'>{errors.Age}</p>}
              <Field className='survey_age' type="text" name="Age" placeholder="Age" />
        
              {touched.Email && errors.Name && <p className='survey-form-errors'>{errors.Email}</p>}
              <Field className='survey_email' type="text" name="Email" placeholder="Email" />
      
              <Field className='survey_question' component="textarea" type="text" name="Question1" placeholder="What is something you love about using this app?  " />
      
              <Field className='survey_question' component="textarea" type="text" name="Question2" placeholder="What is something that can be better implemented? " />
        
              <button className='survey-btn' type="submit">Submit
              </button>
      <button className="rating-btn"><Link className="survey-link" to="/survey-rating">Rate Us</Link></button>
            </Form>
        </div>
    
        
     </div>
  )
}

export default withFormik({
  mapPropsToValues:(values) => {
    return {
      Name:values.Name || "",
      Age: values.Age || "",
      Email: values.Email || ""
    }
  },
    validationSchema: yup.object().shape({
      Name: yup.string().required(),
      Age: yup.string().required(),
      Email: yup.string().required()
    }),
    handleSubmit:(values, { setStatus}) => {
       axios
          .post("https://reqres.in/api/users", values)
            .then(res => {
              setStatus(res.data)
              console.log(res.data)
            })
            .catch((err) => {
              console.log('Error:', err)
            })
    }

  

})(Survey);