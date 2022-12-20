import React from 'react';
import styled from 'styled-components';
import { Container } from './DiscriptionModal';
import { ReactComponent as Cancel } from '../asset/cancel.svg';

const MessageModal = () => {
  return (
    <Container>
      <ContentContainer>
        <StyledCancel />
        <MessageContainer>
          <Message>
            <p>친구야 파 많이 먹어</p>
            <Sender>김땡땡</Sender>
          </Message>
        </MessageContainer>
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
const MessageContainer = styled.div`
  background-color: #eeecdd;
  width: 342px;
  height: 282px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  width: 327px;
  height: 270px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23947E5EFF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 26px;
  padding: 20px 23px 12px 22px;
  display: flex;
  justify-content: space-between;
`;
const StyledCancel = styled(Cancel)`
  align-self: flex-end;
  margin: 15px 20px;
`;
const Sender = styled.p`
  color: ${(props) => props.theme.colors.brown};
  align-self: flex-end;
`;
