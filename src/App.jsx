import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = 'http://localhost:3000/oauth';

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={KAKAO_AUTH_URL}>카카오로 로그인</a>
      <GlobalStyle />
    </>
  );
};

export default App;
