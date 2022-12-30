import border from '../asset/boulborder.svg';
import styled from 'styled-components';
import basic from '../asset/basic.svg';
import none from '../asset/none.svg';
import plus from '../asset/plus.svg';
import quemark from '../asset/quemark.svg';
import React, { useState } from 'react';
import DiscriptionModal from './DiscriptionModal';

const BoulCount = ({ cnt }) => {
  const Boul = {
    none,
    plus,
    basic,
  };
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const BoulList = [];

  if (cnt > 10) {
    for (let i = 1; i < 10; i++) {
      BoulList.push(Boul.basic);
    }
    BoulList.push(Boul.plus);
  } else {
    for (let i = cnt; i > 0; i--) {
      BoulList.push(Boul.basic);
    }
    for (let j = cnt; j < 10; j++) {
      BoulList.push(Boul.none);
    }
  }

  return (
    <Container>
      <TitleWrapper>
        <CountTitleGray>
          보유한 그릇 (총 <CountTitleRed>{cnt}</CountTitleRed>개)
        </CountTitleGray>
        <QueButtonWrapper>
          <img src={quemark} alt='button' onClick={openModal} />
        </QueButtonWrapper>
        {isOpen && <DiscriptionModal setIsOpen={setIsOpen} />}
      </TitleWrapper>
      <Border>
        {BoulList.map((svg, index) => (
          <img key={index} src={svg} />
        ))}
      </Border>
    </Container>
  );
};

const Container = styled.div`
  width: 180px;
  height: 180px;
`;

const Border = styled.div`
  background-image: url('${border}');
  width: 180px;
  height: 100px;
  padding: 18px 8px;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CountTitleGray = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  color: ${({ theme }) => theme.colors.gray};
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const CountTitleRed = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.red};
`;

const QueButtonWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  align-items: center;
  margin-top: 2px;
  cursor: pointer;
`;

export default BoulCount;
