import React from 'react';
import styled from 'styled-components';
import Spoon from '../asset/spoon.svg';
import Fork from '../asset/fork.svg';
import Golden from './Gold';

const Complete = (props) => {
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Title>내 떡국은&nbsp;</Title>
          <Title textColor={props.color}>{props.title}</Title>
        </TitleContainer>
        <Golden readings={props} />
        {props.text}
        <IngredientText>
          친구들이 보내준 재료들을 클릭하여
          <br />
          새해 메시지를 확인해보세요
        </IngredientText>
      </ContentContainer>
      <ImageContainer>
        <ImageWrapper src={Spoon} />
        <CompleteImg src={props.source} />
        <ImageWrapper src={Fork} />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-top: 15px;
  margin-left: 22px;
  line-height: 24px;
  color: ${(props) => props.textColor || props.theme.colors.beige};
`;

const TitleContainer = styled.div`
  width: 286px;
  height: 36px;
  margin-bottom: 6px;
  display: flex;
`;

const Title = styled.div`
  font-weight: 400;
  line-height: 36px;
  font-size: 32px;
  color: ${(props) => props.textColor || props.theme.colors.ivory};
`;

const IngredientText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.textColor};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CompleteImg = styled.img`
  width: 140px;
  height: 140px;
`;

const ImageWrapper = styled.img`
  margin: 15px;
`;

export default Complete;
