import React from 'react';
import styled from 'styled-components';
import { Container } from './DiscriptionModal';
import { ReactComponent as Cancel } from '../asset/cancel.svg';

const MessageModal = () => {
  return (
    <Container>
      <ContentContainer>
        <StyledCancel />
        <Message>Hi</Message>
      </ContentContainer>
    </Container>
  );
};

export default MessageModal;

const ContentContainer = styled.div`
  width: 342px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  background-color: #eeecdd;
  width: 100%;
  height: 282px;
  border-radius: 30px;
  padding: 26px 30px;
`;
const StyledCancel = styled(Cancel)`
  align-self: flex-end;
  margin: 15px 20px;
`;
