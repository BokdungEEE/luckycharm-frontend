import React from 'react';
import styled, { css } from 'styled-components';

import ReceivedEgg from '../asset/receivedegg.svg';
import ReceivedGreenonion from '../asset/receivedgreenonion.svg';
import ReceivedMeat from '../asset/receivedmeat.svg';
import ReceivedRice from '../asset/receivedricecake.svg';
import ReceivedWater from '../asset/receivedwater.svg';
import ReceivedSeaweed from '../asset/receivedseaweed.svg';

const Received = (props) => {
  const parent = props.readings;

  return parent.map((data, index) => {
    if (data.ingredient == 'egg') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedEgg} />
          <NameTag textColor='egg'>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'greenOnion') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedGreenonion} />
          <NameTag textColor='greenonion'>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'meat') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedMeat} />
          <NameTag textColor='meat'>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'rice') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedRice} />
          <NameTag textColor='white'>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'water') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedWater} />
          <NameTag textColor='water'>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'seaWeed') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedSeaweed} />
          <NameTag textColor='seaweed'>{data.nickname}</NameTag>
        </Container>
      );
    }
  });
};
const Container = styled.div`
  width: 112px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ReceivedImg = styled.img`
  width: 112px;
  height: 112px;
`;
const NameTag = styled.div`
  width: 112px;
  margin: 14px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.textColor};
  ${({ textColor, theme }) => {
    if (textColor === 'egg') {
      return css`
        color: ${theme.colors.egg};
      `;
    }
    if (textColor === 'greenonion') {
      return css`
        color: ${theme.colors.greenonion};
      `;
    }
    if (textColor === 'meat') {
      return css`
        color: ${theme.colors.meat};
      `;
    }
    if (textColor === 'rice') {
      return css`
        color: ${theme.colors.white};
      `;
    }
    if (textColor === 'water') {
      return css`
        color: ${theme.colors.water};
      `;
    }
    if (textColor === 'seaweed') {
      return css`
        color: ${theme.colors.seaweed};
      `;
    }
  }}
`;

export default Received;
