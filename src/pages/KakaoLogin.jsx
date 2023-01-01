import React from 'react';
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  useEffect(() => {
    //code로 login api
    if (localStorage.getItem('friendKey')) {
      navigate('/intro');
    } else {
      navigate('/');
    }
  }, []);
  return <div></div>;
};

export default KakaoLogin;
