import React from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import img from '../asset/unknown.svg';

const IntroPage = () => {
  return (
    <Container>
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
      <Rabbit emotion='angry' text='목이 막힐 것 같아' />
      <IngredientWrapper>
        <img src={img} alt='ingred' />
      </IngredientWrapper>
      <ButtonWrapper>
        <LongButton type='button'>떡국 재료 보내기</LongButton>
      </ButtonWrapper>
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
