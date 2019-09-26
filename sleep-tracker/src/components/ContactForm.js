import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, withFormik, Field} from "formik";
import * as Yup from 'yup';

const ContactForm = ({errors, touched, status}) => {
    const [form, setForm] = useState([]);
    useEffect(() => {
        status && setForm(form => [...form, status]);
    }, [status]);

    return (
        <div className='wrapper'>
            <div className='contact-form'>
                <h1>Contact Us</h1>
                <Form className='main-form'>
                    <Field className='first-name' type='text' name='firstName' placeholder='First Name'/>
                    {touched.firstName && errors.firstName && (<p className='error'>{errors.firstName}</p>)}
                    <Field className='last-name' type='text' name='lastName' placeholder='Last Name'/>
                    {touched.lastName && errors.lastName && <p className='error'>{errors.lastName}</p>}
                    <Field className='email' type='text' name='email' placeholder='Email'/>
                    {touched.email && errors.email && (<p className='error'>{errors.email}</p>)}
                    <Field className='message' component='textarea' type='text' name='message' placeholder='Message'/>
                    {touched.message && errors.message && (<p className='error'>{errors.message}</p>)}
                    <div className='submit-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

const FormikContactForm = withFormik({
    mapPropsToValues({firstName, lastName, email, message }){
        return{
            message: message || '',
            email: email || '',
            lastName: lastName || '',
            firstName: firstName || ''
        };
    },
    validationSchema: Yup.object().shape({
        message: Yup.string().required('Message is a required field'),
        email: Yup.string().required('Email is a required field'),
        lastName: Yup.string().required('Last Name is a required field'),
        firstName: Yup.string().required('First Name is a required field')

    }),

    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data);
                console.log(res)
            })
            .catch(err => console.log(err));
    }
})(ContactForm);
export default FormikContactForm;