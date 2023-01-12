import React from 'react';
import styled from 'styled-components';
import { IngredientButton } from './button';

const Ingredient = ({ id, source, color, bgcolor, setSelected, selected }) => {
  return (
    <Container>
      <IngredientImg src={source} />
      <SelectButton
        onClick={() => {
          setSelected(id);
        }}
        textColor={selected === id && color}
        buttonColor={selected === id && bgcolor}
      >
        {id}
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
  color: ${(props) => props.textColor || 'white'};
  background-color: ${(props) => props.buttonColor || props.theme.colors.beige};
`;

export default Ingredient;
