import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import img from '../asset/unknown.svg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AccessTokenKey, FriendKey } from '../consts/LocalStorageKey';
import { getValidation } from '../api/token';
import LoadingPage from './LoadingPage';
import server from '../api/service';
import Notfoundpage from './NotFoundPage';
import { IsBefore } from '../api/IsBefore';

const IntroPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [hint, setHint] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isBefore, setIsBefore] = useState(true);
  const { frinedKey } = useParams();
  const navigate = useNavigate();
  localStorage.setItem(FriendKey, frinedKey);

  const roadHints = async () => {
    setIsLoading(true);
    const { data } = await server.roadHint();
    setHint(data.data);
    setIsLoading(false);
  };

  const isTokenValid = async () => {
    setIsLoading(true);
    const valid = await getValidation();
    if (valid === "This user's token is valid") setIsLogin(true);
    else setIsLogin(false);
    setIsLoading(false);
  };

  const getIsBefore = async () => {
    setIsLoading(true);
    const { data } = await IsBefore();
    setIsBefore(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getIsBefore();
    roadHints();
    if (localStorage.getItem(AccessTokenKey)) isTokenValid();
    else setIsLogin(false);
  }, []);

  const handleNavigate = () => {
    if (isLogin) navigate('/select');
    else navigate('/flogin');
  };

  return (
    <Container>
      {isLoading ? (
        <>
          <LoadingPage />
        </>
      ) : isBefore ? (
        <>
          <TextWrapper>
            <Title>내 떡국을 완성해줘!</Title>
            <SmallGray>
              설날이 되면 받은 재료들로
              <br />
              토끼가 맛있는 떡국을 먹을 수 있도록
              <br />
              떡국 재료와 함께 새해 인사 메시지를 보내주세요
            </SmallGray>
          </TextWrapper>
          <Rabbit emotion='angry' text={hint} />
          <IngredientWrapper>
            <img src={img} alt='ingred' />
          </IngredientWrapper>
          <ButtonWrapper>
            <SubmitButton type='button' onClick={handleNavigate}>
              떡국 재료 보내기
            </SubmitButton>
          </ButtonWrapper>
        </>
      ) : (
        <Notfoundpage />
      )}
    </Container>
  );
};

export default IntroPage;

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
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 24px;
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
  bottom: 50px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
`;

const IngredientWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 120px;
`;

const SubmitButton = styled(LongButton)`
  padding-top: 5px;
  &:hover {
    color: ${({ theme }) => theme.colors.beige};
  }
`;
