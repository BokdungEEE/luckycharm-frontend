import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AccessTokenKey, FriendKey } from '../consts/LocalStorageKey';
import LoadingPage from './LoadingPage';
import { getValidation } from '../api/token';
import LoginPage from './LoginPage';

const RequireAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const isTokenValid = async () => {
    setIsLoading(true);
    const data = await getValidation();
    if (data === "This user's token is valid") setIsLogin(true);
    else setIsLogin(false);
    setIsLoading(false);
  };
  useEffect(() => {
    if (localStorage.getItem(FriendKey)) localStorage.removeItem(FriendKey);
    if (localStorage.getItem(AccessTokenKey)) isTokenValid();
    else setIsLogin(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : isLogin ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </>
  );
};

export default RequireAuth;
