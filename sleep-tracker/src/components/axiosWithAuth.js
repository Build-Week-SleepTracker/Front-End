import axios from 'axios';



export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://lambda-sleep-tracker.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};

