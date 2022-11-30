import React from 'react';
import styled from 'styled-components';

const Ingredient = ({ source, text, color, setSelected, selected, index }) => {
  return (
    <Container>
      <Img src={source} />
      <Btn
        onClick={() => {
          setSelected({ img: source, text, index });
        }}
        bColor={selected.index === index && color}
      >
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
  background-color: #d0cdb5;
  border-radius: 24px;
  width: 96px;
  border: none;
  height: 36px;
  background-color: ${(props) => props?.bColor};
`;

export default Ingredient;
