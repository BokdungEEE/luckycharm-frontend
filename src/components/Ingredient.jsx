import React from 'react';
import styled from 'styled-components';
import { IngredientButton } from './button';

const Ingredient = ({
  source,
  text,
  color,
  bgcolor,
  setSelected,
  selected,
  index,
}) => {
  return (
    <Container>
      <IngredientImg src={source} />
      <SelectButton
        onClick={() => {
          setSelected({ img: source, ingredient: text, index });
        }}
        textColor={selected.index === index && color}
        buttonColor={selected.index === index && bgcolor}
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
  width: 40%;
`;
const IngredientImg = styled.img`
  width: 140px;
  height: 140px;
`;
const SelectButton = styled(IngredientButton)`
  color: ${(props) => props?.textColor};
  background-color: ${(props) => props?.buttonColor};
`;

export default Ingredient;
