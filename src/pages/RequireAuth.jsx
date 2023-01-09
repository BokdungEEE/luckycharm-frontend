import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AccessTokenKey } from '../consts/LocalStorageKey';

const token = localStorage.getItem(AccessTokenKey);

const RequireAuth = () => {
  //console.log('token:', token);
  if (!token) return <Navigate to='/login' />;
  return <Outlet />;
};

export default RequireAuth;
