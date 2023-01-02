import React from 'react';
import { login } from '../api/login';

const KakaoLogin = () => {
  //const friendKey = useRecoilValue(friendKeyAtom);
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  console.log(login(code));
  // if (login(code)) {
  //   if (friendKey) {
  //     navigate('/intro');
  //   } else {
  //     navigate('/');
  //   }
  // }
  return <div></div>;
};

export default KakaoLogin;
