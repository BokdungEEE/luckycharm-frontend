import React from 'react';
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FriendKey } from '../consts/LocalStorageKey';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  useEffect(() => {
    const friendKey = localStorage.getItem(FriendKey);
    login(code);
    if (friendKey) {
      navigate(`/intro/${friendKey}`);
    } else {
      navigate('/');
    }
  }, []);
  return <div></div>;
};

export default KakaoLogin;
