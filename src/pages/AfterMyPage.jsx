import React from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import img from '../asset/purpleUnknownBoul.svg';
import server from '../api/service';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoadingPage from './LoadingPage';

const AfterMainPage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const afterRoadMyPage = useCallback(async () => {
    const { data } = await server.afterRoadMyPage();
    setData(data.data);
  }, []);

  useEffect(() => {
    afterRoadMyPage();
  }, [afterRoadMyPage]);

  if (!data) return <LoadingPage />;

  return (
    <Container>
      <TextWrapper>
        <Title>올해도 행복하세요 :)</Title>
        <SmallGray>
          친구들에게 받은 재료들로 <br />
          어떤 떡국이 완성되었는지 확인해 보세요!
        </SmallGray>
      </TextWrapper>
      <Rabbit emotion='laugh' />
      <HowMany>
        <SmallBrown>받은 재료</SmallBrown>
        <BigBrown>총 {data.length}개</BigBrown>
      </HowMany>

      <IngredientWrapper>
        <img src={img} alt='boul' />
      </IngredientWrapper>
      <ButtonWrapper>
        <ConfirmButton type='button' onClick={() => navigate('/result')}>
          내 떡국 확인하기
        </ConfirmButton>
      </ButtonWrapper>
    </Container>
  );
};
export default AfterMainPage;

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
  color: ${({ theme }) => theme.colors.purple};
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
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const SmallBrown = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.brown};
`;

const BigBrown = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.brown};
`;

const ButtonWrapper = styled.div`
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 60px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
`;

const ConfirmButton = styled(LongButton)`
  color: ${({ theme }) => theme.colors.purple};
  &:hover {
    color: ${({ theme }) => theme.colors.beige};
  }
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

const HowMany = styled.div`
  position: flex;
  flex-direction: column;
  margin-top: 300px;
  margin-left: 300px;
`;
