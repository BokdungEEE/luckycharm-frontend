import React from 'react';
import Modal from '../asset/modal.svg';
import styled from 'styled-components';

const DescriptionModal = ({ closeModal }) => {
  return (
    <Container onClick={closeModal}>
      <Img onClick={(e) => e.stopPropagation()}>
        <Content>
          <Text>
            <div>친구에게 재료를 담아 보낼 수 있는</div>
            <div>
              <span>기본 10개의 빈 그릇</span>이 주어집니다.
            </div>
            <div>
              <br /> 친구들에게 재료와 메시지를
              <br />
              보낼 때마다 그릇이 소모되며,
              <br />
              이후에는 친구들에게 재료를
              <br />
              받은 만큼 그릇이 충전됩니다.
              <br />
              <br />
              <div>기본으로 주어지는 10개의 그릇을</div>
              <div>소진했다면 친구에게 재료와 메시지를</div>
              <div>남겨달라고 부탁해 보세요!</div>
            </div>
          </Text>
          <ConfirmButton onClick={closeModal}>확인</ConfirmButton>
        </Content>
      </Img>
    </Container>
  );
};

export default DescriptionModal;

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
  div {
    color: ${(props) => props.theme.colors.black};
  }
  span {
    color: ${(props) => props.theme.colors.red};
  }
  line-height: 24px;
`;
const ConfirmButton = styled.button`
  width: 96px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.colors.brown};
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.brown};
  border-radius: 24px;
  text-align: center;
  margin-top: 30px;
`;
