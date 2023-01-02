import React from 'react';
import styled from 'styled-components';

const Received = ({ source, name, color }) => {
  return (
    <Container>
      <ReceivedImg src={source} />
      <NameTag textColor={color}>{name}</NameTag>
    </Container>
  );
};
const Container = styled.div`
  width: 112px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ReceivedImg = styled.img`
  width: 112px;
  height: 112px;
`;
const NameTag = styled.div`
  width: 112px;
  margin: 14px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.textColor};
`;
export default Received;
