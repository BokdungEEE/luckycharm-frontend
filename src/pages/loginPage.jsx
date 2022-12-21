import React from 'react';

const LoginPage = () => {
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;

  return (
    <div>
      <button>
        <a
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
        >
          카카오로 로그인
        </a>
      </button>
    </div>
  );
};
export default LoginPage;
