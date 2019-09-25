import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, withFormik, Field} from "formik";
import * as Yup from 'yup'

const ContactForm = ({errors, touched, status}) => {
    const [form, setForm] = useState([]);
    useEffect(() => {
        status && setForm(form => [...form, status]);
    }, [status]);

    return (
        <div className='contact-form'>
        <h1>Contact Us</h1>
    <Form>
    <Field type='text' name='firstName' placeholder='First Name'/>
        {touched.firstName && errors.firstName && (<p className='error'>{errors.firstName}</p>)}
            <Field type='text' name='lastName' placeholder='Last Name'/>
            {touched.lastName && errors.lastName && <p className='error'>{errors.lastName}</p>}
                <Field type='text' name='email' placeholder='Email'/>
                {touched.email && errors.email && (<p className='errors'>{errors.email}</p>)}
                    <Field component='textarea' type='text' name='message' placeholder='Message'/>
                    {touched.message && errors.message && (<p className='errors'>{errors.message}</p>)}
                        <button type='submit'>Submit</button>
                        </Form>
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
            message: Yup.string().required(),
            email: Yup.string().required(),
            lastName: Yup.string().required(),
            firstName: Yup.string().required()

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