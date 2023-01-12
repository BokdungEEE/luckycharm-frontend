import React from 'react';
import styled from 'styled-components';
import { ReceivedData } from '../data/recievedData';

const Received = ({ message, setIsOpen, setModalInfo }) => {
  const { content, nickName, ingredient } = message;
  const src = ReceivedData[ingredient];
  const showMsgModal = () => {
    setIsOpen(true);
    setModalInfo({
      content,
      nickName,
    });
  };
  return (
    <Container>
      <ReceivedImg src={src} onClick={showMsgModal} />
      <NameTag textColor={ingredient}>{nickName}</NameTag>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 195px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReceivedImg = styled.img`
  width: 112px;
  height: 112px;
  cursor: pointer;
`;
const NameTag = styled.div`
  width: 112px;
  margin: 14px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.textColor};
  color: ${({ textColor, theme }) => theme.colors[textColor]};
`;

export default Received;
