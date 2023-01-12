import React from 'react';
import Modal from '../asset/modal.svg';
import styled from 'styled-components';
import { ConfirmButton } from './button';

const DescriptionModal = ({ closeModal, isLogin }) => {
  return (
    <Container onClick={closeModal}>
      <Img onClick={(e) => e.stopPropagation()}>
        <Content>
          <Text isLogin={isLogin}>
            {isLogin ? (
              <>
                <div>&apos;해피래빗&apos;은 친구들에게 떡국 재료와</div>
                <div>새해 인사를 주고받으며 자신만의</div>
                <div>떡국을 완성하는 서비스입니다.</div>
                <br />
                <div>친구들에게 받은 재료 개수는 본인만</div>
                <div>확인 가능하고, 친구들이 나에게 </div>
                <div>어떤 재료를 보내주었는지는</div>
                <div>친구가 보낸 메시지와 함께</div>
                <div>
                  <span>설날에 공개되며,</span> 받은 떡국 재료들의
                </div>
                <div>비율에 따라 완성된 떡국이</div>
                <div>다르게 나타납니다.</div>
                <br />
                <div>친구들이 만들어줄 나의 떡국은</div>
                <div>어떤 떡국일까요?</div>
              </>
            ) : (
              <>
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
              </>
            )}
          </Text>
          <ConfirmBtn onClick={closeModal}>확인</ConfirmBtn>
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

const ConfirmBtn = styled(ConfirmButton)`
  margin-top: 30px;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  white-space: pre-wrap;
  font-size: ${(props) => (props.isLogin ? '14px' : '16px')};
  color: ${(props) => props.theme.colors.black};
  span {
    color: ${(props) => props.theme.colors.red};
  }
  line-height: ${(props) => (props.isLogin ? '20px' : '24px')};
`;
