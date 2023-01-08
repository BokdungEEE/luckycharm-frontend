import React from 'react';
import Modal from '../asset/LoginModal.svg';
import styled from 'styled-components';
import { ConfirmButton } from './button';

const LoginModal = ({ closeModal }) => {
  return (
    <Container onClick={closeModal}>
      <Img onClick={(e) => e.stopPropagation()}>
        <Content>
          <Text>
            {'친구에게 재료를 담아 보낼 수 있는'}
            <span>기본 10개의 빈 그릇</span>이 주어집니다.
            {`
              친구들에게 재료와 메시지를
              보낼 때마다 그릇이 소모되며,
              이후에는 친구들에게 재료를
              받은 만큼 그릇이 충전됩니다.
              
              기본으로 주어지는 10개의 그릇을
              소진했다면 친구에게 재료와 메시지를
              남겨달라고 부탁해 보세요!`}
          </Text>
          <ConfirmBtn onClick={closeModal}>확인</ConfirmBtn>
        </Content>
      </Img>
    </Container>
  );
};

export default LoginModal;

export const Container = styled.div`
  background-color: rgba(56, 51, 43, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const Img = styled.div`
  position: absolute;
  width: 342px;
  height: 500px;
  background-image: url(${Modal});
  padding: 42px;
`;
const Content = styled.div`
  padding: 33px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const Text = styled.div`
  text-align: center;
  white-space: pre-wrap;

  color: ${(props) => props.theme.colors.black};

  span {
    color: ${(props) => props.theme.colors.red};
  }
  line-height: 24px;
`;
const ConfirmBtn = styled(ConfirmButton)`
  margin-top: 30px;
`;
