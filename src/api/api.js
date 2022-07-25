import axios from "axios";
import env from '../constants/env'

const { BASE_URL } = env;

const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

export async function login(body) {
    const token = getToken();
    return axios({
      url:BASE_URL + `/api/auth`, 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body
    });
  }

  export async function registerUser(body) {
    const token = getToken();
    return axios({
      url:BASE_URL + `/api/user/register`, 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body
    });
  }