import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AccessTokenKey, FriendKey } from '../consts/LocalStorageKey';
import LoadingPage from './LoadingPage';
import { getValidation } from '../api/token';
import MyLoginPage from './MyLoginPage';

const RequireAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const isTokenValid = async () => {
    setIsLoading(true);
    const data = await getValidation();
    if (data === "This user's token is valid") setIsLogin(true);
    else {
      setIsLogin(false);
      alert('다시 로그인해 주세요!');
    }
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
          <MyLoginPage />
        </>
      )}
    </>
  );
};

export default RequireAuth;
