import React from 'react';
import styled from 'styled-components';
import Spoon from '../asset/spoon.svg';
import Fork from '../asset/fork.svg';

const Complete = ({ source, title, text, ingredient, color }) => {
  const Golden = () => {
    if (ingredient == '완벽한 떡국') {
      return (
        <GoldContainer>
          친구들이 재료를 골고루 보내주어
          <br />
          <GoldText>
            <GoldText textColor={color}>{ingredient}</GoldText>이 완성되었어요!
          </GoldText>
        </GoldContainer>
      );
    } else {
      return (
        <IngredientContainer>
          <IngredientText>
            친구들이 가장 많이 보내준 재료는 바로&nbsp;
          </IngredientText>
          <IngredientText textColor={color}>{ingredient}</IngredientText>
        </IngredientContainer>
      );
    }
  };
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Title>내 떡국은&nbsp;</Title>
          <Title textColor={color}>{title}</Title>
        </TitleContainer>
        {Golden()}
        {text}
        <IngredientText>
          친구들이 보내준 재료들을 클릭하여
          <br />
          새해 메시지를 확인해보세요
        </IngredientText>
      </ContentContainer>
      <ImageContainer>
        <ImageWrapper src={Spoon} />
        <CompleteImg src={source} />
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
  color: ${(props) => props.textColor || '#d0cdb5'};
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
  color: ${(props) => props.textColor || '#eeeccd'};
`;

const IngredientContainer = styled.div`
  display: flex;
`;

const GoldContainer = styled.div`
  flex-direction: column;
`;

const IngredientText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props?.textColor};
`;

const GoldText = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props?.textColor};
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
  margin: auto;
`;

export default Complete;
