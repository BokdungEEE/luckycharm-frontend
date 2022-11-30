import React from 'react';
import styled from 'styled-components';

const Ingredient = ({ source, text, color, setSelected, selected, index }) => {
  return (
    <Container>
      <IngredientImg src={source} />
      <SelectButton
        onClick={() => {
          setSelected({ img: source, ingredient: text, index });
        }}
        buttonColor={selected.index === index && color}
      >
        {text}
      </SelectButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const IngredientImg = styled.img`
  width: 140px;
  height: 140px;
`;
const SelectButton = styled.button`
  background-color: #d0cdb5;
  border-radius: 24px;
  width: 96px;
  border: none;
  height: 36px;
  background-color: ${(props) => props?.buttonColor};
`;

export default Ingredient;
