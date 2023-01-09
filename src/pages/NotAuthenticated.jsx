import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
//import { getToken } from '../consts/LocalStorageKey.js';
import { AccessTokenKey } from '../consts/LocalStorageKey';

const token = localStorage.getItem(AccessTokenKey);
console.log(token);
const NotAuthenticated = () => {
  if (token) return <Navigate to='/' />;
  return <Outlet />;
};

export default NotAuthenticated;
