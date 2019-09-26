import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import {Link} from 'react-router-dom';

class Register extends React.Component {
    state = {
        loading: true,
      credentials: {
        email: '',
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      this.setState({ loading: true });
      
      axiosWithAuth()
        .post('/auth/register', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          console.log(res)
      
          this.setState({ loading: false });
        })
        .catch(err => console.log(err));
    };
    
  
    render() {
      return (
        
        <div>
          <form onSubmit={this.login}>
          <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
       <button>Register</button>
          </form>
         
        </div>
         
      
      );
    }
  }
  
  export default Register;