import React from 'react';
import LotGreenonion from '../asset/lotgreenonion.svg';
import LotRicecake from '../asset/lotricecake.svg';
import LotEgg from '../asset/lotegg.svg';
import LotMeat from '../asset/lotmeat.svg';
import LotSeaweed from '../asset/lotseaweed.svg';
import LotWater from '../asset/lotwater.svg';
import GoldenRatio from '../asset/golden.svg';
import Complete from './Complete';

const Soup = (props) => {
  const soups = [
    {
      id: 'greenOnion',
      img: LotGreenonion,
      title: '파릇파릇 떡국',
      ingredient: '파',
      text: '2023년은 대파처럼 싱싱한 한 해가 될거예요',
      color: '#8CC638',
    },
    {
      id: 'rice',
      img: LotRicecake,
      title: '쫄깃쫄깃 떡국',
      ingredient: '떡!',
      text: '2023년에는 쫄깃쫄깃 즐거운 일들이 가득할거에요',
      color: '#FFFFFF',
    },
    {
      id: 'seaWeed',
      img: LotSeaweed,
      title: '짭쪼름 떡국',
      ingredient: '김!',
      text: '2023년에는 짭짤한 수입이 많겠는데요?',
      color: '#4C4B4A',
    },
    {
      id: 'meat',
      img: LotMeat,
      title: '단백질 떡국',
      ingredient: '고기!',
      text: '2023년에는 아프지않고 건강! 튼튼!한 한 해가 될 거예요',
      color: '#84604A',
    },
    {
      id: 'egg',
      img: LotEgg,
      title: '보들보들 떡국',
      ingredient: '계란!',
      text: '2023년에는 모든 일이 부드럽고 순조롭게 진행될 거예요',
      color: '#FFCA43',
    },
    {
      id: 'water',
      img: LotWater,
      title: '한강 떡국',
      ingredient: '물!',
      text: '2023년에는 모든 일이 강물처럼 시원하게 잘될 거예요',
      color: '#B4DCE9',
    },
  ];

  const myobject = props.readings[0];
  const values = Object.values(props.readings[0]);
  const temp = values[0];
  let map = new Map(Object.entries(myobject));

  const most = [...map.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];

  if (
    values[1] === temp &&
    values[2] === temp &&
    values[3] === temp &&
    values[4] === temp &&
    values[5] === temp
  ) {
    return (
      <Complete
        source={GoldenRatio}
        color={'#F3D666'}
        title={'황금비율 떡국'}
        text={'2023년은 완벽한 한 해가 되겠는걸요?'}
        ingredient={'완벽한 떡국'}
      />
    );
  } else {
    return (
      <div>
        {soups
          .filter((soup) => soup.id === most)
          .map((soup, i) => (
            <Complete
              key={i}
              source={soup.img}
              color={soup.color}
              title={soup.title}
              text={soup.text}
              ingredient={soup.ingredient}
            />
          ))}
      </div>
    );
  }
};

export default Soup;
