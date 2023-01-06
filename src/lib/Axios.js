import axios from 'axios';
import { AccessTokenKey } from '../consts/LocalStorageKey';

const token = localStorage.getItem(AccessTokenKey);

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
