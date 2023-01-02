import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../styles/theme';

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
          <NameTag textColor={defaultTheme.colors.egg}>{data.nickname}</NameTag>
        </Container>
      );
    } else if (data.ingredient == 'green_onion') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedGreenonion} />
          <NameTag textColor={defaultTheme.colors.greenonion}>
            {data.nickname}
          </NameTag>
        </Container>
      );
    } else if (data.ingredient == 'meat') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedMeat} />
          <NameTag textColor={defaultTheme.colors.meat}>
            {data.nickname}
          </NameTag>
        </Container>
      );
    } else if (data.ingredient == 'rice') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedRice} />
          <NameTag textColor={defaultTheme.colors.white}>
            {data.nickname}
          </NameTag>
        </Container>
      );
    } else if (data.ingredient == 'water') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedWater} />
          <NameTag textColor={defaultTheme.colors.water}>
            {data.nickname}
          </NameTag>
        </Container>
      );
    } else if (data.ingredient == 'sea_weed') {
      return (
        <Container key={index}>
          <ReceivedImg src={ReceivedSeaweed} />
          <NameTag textColor={defaultTheme.colors.seaweed}>
            {data.nickname}
          </NameTag>
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
`;

export default Received;
