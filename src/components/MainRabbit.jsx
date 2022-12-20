import React from 'react';
import styled from 'styled-components';
import mainRabbit from '../asset/rabbit.svg';
import table from '../asset/table.svg';
import background from '../asset/bubble.svg';

const MainRabbit = ({ text }) => {
  return (
    <ImgWrapper>
      <RabbitWrapper src={mainRabbit} alt='rabbit' />
      <TableWrapper src={table} alt='table' />
      <BubbleWrapper>
        <BubbleText>{text || '단백질이 필요해...'}</BubbleText>
      </BubbleWrapper>
    </ImgWrapper>
  );
};

export default MainRabbit;

const ImgWrapper = styled.div`
  width: 390px;
  max-height: 844px;
`;

const TableWrapper = styled.img`
  position: absolute;
  bottom: 0px;
`;

const RabbitWrapper = styled.img`
  position: absolute;
  bottom: 0px;
  margin-bottom: 200px;
`;

const BubbleWrapper = styled.div`
  //border: 1px solid black;
  display: flex;
  background-image: url('${background}');
  background-repeat: no-repeat;
  background-position: cover;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 100px;
  //padding: 10px;
  position: absolute;
  top: 35%;
  left: 50%;
`;

const BubbleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #686868;
  margin-bottom: 10px;
`;
