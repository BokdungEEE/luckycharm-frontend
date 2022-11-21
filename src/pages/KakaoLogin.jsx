import React from 'react';
const KakaoLogin = () => {
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  console.log(code);
  return <div></div>;
};

export default KakaoLogin;
