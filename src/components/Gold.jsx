import React from 'react';
import styled from 'styled-components';
const Golden = (props) => {
  const parent = props.readings;
  if (parent.ingredient == '완벽한 떡국') {
    return (
      <GoldContainer>
        친구들이 재료를 골고루 보내주어
        <br />
        <GoldText>
          <GoldText textColor={parent.color}>{parent.ingredient}</GoldText>이
          완성되었어요!
        </GoldText>
      </GoldContainer>
    );
  } else {
    return (
      <IngredientContainer>
        <IngredientText>
          친구들이 가장 많이 보내준 재료는 바로&nbsp;
        </IngredientText>
        <IngredientText textColor={parent.color}>
          {parent.ingredient}
        </IngredientText>
      </IngredientContainer>
    );
  }
};
const IngredientContainer = styled.div`
  display: flex;
`;

const GoldContainer = styled.div`
  flex-direction: column;
`;

const GoldText = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.textColor};
`;

const IngredientText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.textColor};
`;

export default Golden;
