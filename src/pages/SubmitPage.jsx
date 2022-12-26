import React from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import { defaultTheme } from '../styles/theme';
import { useLocation } from 'react-router-dom';

const SubmitPage = () => {
  const location = useLocation();
  const state = location.state;
  const img = state.img;
  return (
    <Container>
      <TextWrapper>
        <Title>THANK YOU!</Title>
        <SmallGray>
          떡국 재료와 메시지를 보내주어 고마워요!
          <br /> 새해 복 가득 받으세요.
        </SmallGray>
      </TextWrapper>
      <Rabbit emotion='laugh' text='보내줘서 고마워!' />
      <IngredientWrapper>
        <img src={img} alt='ingred' />
      </IngredientWrapper>
      <ButtonWrapper>
        <LongButton type='button'>내 페이지로 가기</LongButton>
      </ButtonWrapper>
    </Container>
  );
};
export default SubmitPage;

const Container = styled.div`
  height: 844px;
  width: 390px;
  background-image: url('${background}');
  background-blend-mode: multiply;
  position: relative;
`;

const Title = styled.h1`
  margin-top: 80px;
  font-size: 32px;
  font-weight: 400;
  color: ${defaultTheme.colors.red};
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${defaultTheme.colors.gray};
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
