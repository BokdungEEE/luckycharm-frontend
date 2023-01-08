import React from 'react';
import NotFound from '../asset/404.svg';
import background from '../asset/texture.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Notfoundpage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NotFoundImg src={NotFound} />
      <NotFoundText>
        <Content>PAGE NOT FOUND</Content>
        <Content>
          <p>
            죄송합니다. 찾으려는 페이지의 주소가
            <br />
            잘못 입력되었거나, 주소의 변경 혹은
            <br />
            삭제로 인해 사용하실 수 없습니다.
          </p>
        </Content>
      </NotFoundText>
      <MainBtn onClick={() => navigate('/')}>메인으로</MainBtn>
    </Container>
  );
};

export default Notfoundpage;

export const Container = styled.div`
  margin: 0 auto;
  width: 390px;
  height: 844px;
  background-image: url('${background}');
  background-blend-mode: multiply;
  background-color: ${({ theme }) => theme.colors.ivory};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotFoundImg = styled.img`
  width: 178px;
  height: 133px;
`;
const NotFoundText = styled.div``;
const Content = styled.div`
  color: ${(props) => props.theme.colors.gray};
  line-height: 24px;
  text-align: center;
  :nth-child(1) {
    font-size: 32px;
    margin: 30px 0 12px 0;
  }
`;
const MainBtn = styled.button`
  width: 236px;
  height: 52px;
  margin-top: 227px;
  background-color: ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.ivory};
  box-shadow: rgba(29, 29, 29, 0.25);
  border-radius: 27px;
  font-size: 24px;
`;
