import React, { useState } from 'react';
import Modal from '../asset/modal.svg';
import styled from 'styled-components';

const DiscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Img>
        <Content>
          <Text>
            <p>친구에게 재료를 담아 보낼 수 있는</p>
            <p>
              <span>기본 10개의 빈 그릇</span>이 주어집니다.
            </p>
            <p>
              <br /> 친구들에게 재료와 메시지를
              <br />
              보낼 때마다 그릇이 소모되며,
              <br />
              이후에는 친구들에게 재료를
              <br />
              받은 만큼 그릇이 충전됩니다.
              <br />
              <br />
              기본으로 주어지는 10개의 그릇을 소진했다면 친구에게 재료와
              메시지를 남겨달라고 부탁해 보세요!
            </p>
          </Text>
          <ConfirmButton onClick={closeModal}>확인</ConfirmButton>
        </Content>
      </Img>
    </Container>
  );
};

export default DiscriptionModal;

export const Container = styled.div`
  background-color: rgba(56, 51, 43, 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div`
  position: absolute;
  width: 345px;
  height: 500px;
  background-image: url(${Modal});
  padding: 42px;
`;
const Content = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Text = styled.div`
  text-align: center;
  white-space: pre-wrap;
  span {
    color: #e9b68f;
  }
  line-height: 25px;
`;
const ConfirmButton = styled.button``;
