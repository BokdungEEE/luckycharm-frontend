import React from 'react';
import styled from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';

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
      <Rabbit />
      <ButtonWrapper>
        <LongButton type='button'>떡국 재료 보내기</LongButton>
      </ButtonWrapper>
    </Container>
  );
};

export default IntroPage;

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
  color: #e9b68f;
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  color: #545454;
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

const SendButton = styled.button`
  width: 236px;
  height: 52px;
  background-color: #eeecde;
  border-radius: 27px;
  position: relative;
  top: 600px;
`;
