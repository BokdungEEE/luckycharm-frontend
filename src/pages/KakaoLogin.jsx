import React from 'react';
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FriendKey } from '../consts/LocalStorageKey';
import LoadingPage from './LoadingPage';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  const friendKey = localStorage.getItem(FriendKey);

  useEffect(() => {
    signin();
  }, []);

  const signin = async () => {
    if (!code) navigate('/');
    else {
      await login(code);
      if (friendKey) {
        navigate(`/intro/${friendKey}`);
      } else {
        navigate('/');
      }
    }
  };

  return (
    <>
      <LoadingPage />
    </>
  );
};

export default KakaoLogin;
