import React from 'react';
import styled from 'styled-components';
import ProgressBar from './progressbar';
import { ReactComponent as Cancel } from '../asset/cancel.svg';
import { ReceivedData } from '../data/recievedData';
import { MatchData } from '../data/MatchData';

const ProgressModal = ({ readings, setIsOpen }) => {
  const IngredientsKeys = Object.keys(readings);
  return (
    <Container
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <ContentContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <StyledCancel
          onClick={() => {
            setIsOpen(false);
          }}
        />

        <ProgressWrapper>
          <ProgressBar readings={readings} height={566} />
        </ProgressWrapper>
        <Background>
          {IngredientsKeys.map((ingredient, idx) => (
            <BoulWrapper key={idx}>
              <Img src={ReceivedData[ingredient]} />
              <Gray>{`${MatchData[ingredient]}: ${readings[ingredient]}개`}</Gray>
            </BoulWrapper>
          ))}
        </Background>
      </ContentContainer>
    </Container>
  );
};

export default ProgressModal;

const Container = styled.div`
  background-color: rgba(56, 51, 43, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ContentContainer = styled.div`
  width: 342px;
  height: 566px;
`;

const StyledCancel = styled(Cancel)`
  align-self: flex-end;
  margin: 15px 20px;
  margin-left: 300px;
  cursor: pointer;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 342px;
  height: 526px;
  z-index: 2;
  margin-top: 20px;
`;

const BoulWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gray = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 13px;
`;

const Img = styled.img`
  width: 100px;
  height: 76px;
  margin: 20px;
`;

const ProgressWrapper = styled.div`
  z-index: -50;
  position: absolute;
`;
