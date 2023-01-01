import React, { useState } from 'react';
import Rabbit from '../components/MainRabbit';
import styled from 'styled-components';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import boul from '../asset/dukguk.svg';
import kakao from '../asset/kakao.svg';
import quemark from '../asset/quemark.svg';
import { useParams } from 'react-router-dom';
import DescriptionModal from '../components/DescriptionModal';

const LoginPage = () => {
  const { frinedKey } = useParams();
  localStorage.setItem('friendKey', frinedKey);
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      {isOpen && <DescriptionModal closeModal={closeModal} isLogin={true} />}
      <TextWrapper>
        <TopWrapper>
          <Title>카카오 로그인</Title>
          <QueButtonWrapper
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img src={quemark} alt='?' />
          </QueButtonWrapper>
        </TopWrapper>
        <SmallGray>
          떡국 재료와 메시지를 보내기 위해서는
          <br /> 로그인이 필요합니다.
        </SmallGray>
      </TextWrapper>
      <Rabbit emotion='laugh' />
      <IngredientWrapper>
        <img src={boul} alt='boul' />
      </IngredientWrapper>
      <ButtonWrapper>
        <LoginButton type='button'>
          <Kakao>
            <img src={kakao} alt='log' />
          </Kakao>
          <KakaoLink
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
          >
            카카오 로그인
          </KakaoLink>
        </LoginButton>
      </ButtonWrapper>
    </Container>
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
  bottom: 80px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
`;

const KakaoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
const Kakao = styled.div`
  padding: 10px;
  padding-top: 15px;
`;
const LoginButton = styled(LongButton)`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 5px;
`;

const IngredientWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 140px;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QueButtonWrapper = styled.div`
  width: 18px;
  height: 18px;

  align-items: center;
  margin-left: 147px;
  cursor: pointer;
`;

const TopWrapper = styled.div`
  display: flex;
  margin-top: 80px;
`;
