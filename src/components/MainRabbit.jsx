import React from 'react';
import styled from 'styled-components';
import angryRabbit from '../asset/angryRabbit.svg';
import smileRabbit from '../asset/smileRabbit.svg';
import laughRabbit from '../asset/laughRabbit.svg';
import table from '../asset/table.svg';
import background from '../asset/bubble.svg';

const MainRabbit = ({ text, emotion }) => {
  const Tokki = {
    angry: angryRabbit,
    smile: smileRabbit,
    laugh: laughRabbit,
  }[emotion];

  return (
    <ImgWrapper>
      <RabbitWrapper src={Tokki} alt='rabbit' />
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
  padding: 10px;
  position: absolute;
  top: 35%;
  left: 50%;
`;

const BubbleText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #686868;
  margin-bottom: 10px;
`;
