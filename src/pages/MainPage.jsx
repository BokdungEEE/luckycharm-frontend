import React from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import img from '../asset/boul.svg';
import quemark from '../asset/quemark.svg';

const MainPage = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>HAPPY NEW YEAR!</Title>
        <SmallGray>
          친구들에게 받은 떡국 재료와 메시지는
          <br />
          설날<SmallBrown>(2022.01.21)</SmallBrown>부터 확인할 수 있어요
        </SmallGray>
      </TextWrapper>
      <CountBowl>
        <TitleWrapper>
          <CountTitleGray>
            보유한 그릇 (총 <CountTitleRed>10</CountTitleRed>개)
          </CountTitleGray>
          <QueButtonWrapper>
            <img src={quemark} alt='button' />
          </QueButtonWrapper>
        </TitleWrapper>
      </CountBowl>
      <Rabbit emotion='smile' />
      <IngredientWrapper>
        <img src={img} alt='boul' />
      </IngredientWrapper>
      <ButtonWrapper>
        <LongButton type='button'>링크 공유하기</LongButton>
      </ButtonWrapper>
    </Container>
  );
};
export default MainPage;

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

const SmallBrown = styled.span`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.brown};
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
  bottom: 60px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
`;

const IngredientWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 140px;
`;

const CountBowl = styled.div`
  position: absolute;
  margin-left: 210px;
  margin-top: 80px;
`;

const CountTitleGray = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  color: ${({ theme }) => theme.colors.gray};
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const CountTitleRed = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.red};
`;

const QueButtonWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  align-items: center;
  margin-top: 2px;
`;
