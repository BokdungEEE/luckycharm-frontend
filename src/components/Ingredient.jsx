import React from 'react';
import styled from 'styled-components';

const Ingredient = ({ source, text, color, setSelected }) => {
  return (
    <Container>
      <Img src={source} />
      <Btn onClick={() => setSelected(text)} color={color}>
        {text}
      </Btn>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const Img = styled.img`
  width: 140px;
  height: 140px;
`;
const Btn = styled.button`
  :hover {
    color: ${(props) => props.color};
  }
`;

export default Ingredient;
