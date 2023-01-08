import React from 'react';
import Rabbit from '../components/MainRabbit';
import styled, { ThemeProvider } from 'styled-components';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import { defaultTheme } from '../styles/theme';

const LoginPage = () => {
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;

  return (
    <ThemeProvider theme={defaultTheme.colors}>
      <Container>
        <TextWrapper>
          <Title>카카오 로그인</Title>
          <SmallGray>
            떡국 재료와 메시지를 보내기 위해서는
            <br /> 로그인이 필요합니다.
          </SmallGray>
        </TextWrapper>
        <Rabbit emotion='laugh' text='올해는 나의 해!' />
        <ButtonWrapper>
          <LongButton type='button'>
            <KakaoLink
              href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
            >
              카카오 로그인
            </KakaoLink>
          </LongButton>
        </ButtonWrapper>
      </Container>
    </ThemeProvider>
  );
};
export default LoginPage;

const Container = styled.div`
  margin: 0 auto;
  height: 844px;
  width: 390px;
  background-image: url('${background}');
  background-blend-mode: multiply;
  background-color: ${({ theme }) => theme.colors.ivory};
  position: relative;
`;

const Title = styled.h1`
  margin-top: 80px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

const TextWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 100px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
`;

const KakaoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
