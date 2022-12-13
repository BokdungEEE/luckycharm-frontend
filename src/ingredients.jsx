import React, { Component } from 'react';
// import { GlobalStyle } from './styles/GlobalStyle';
import egg from '../src/assets/images/Egg.svg';
import green_onion from '../src/assets/images/Greenonion.svg';
import meat from '../src/assets/images/Meat.svg';
import rice from '../src/assets/images/Ricecake.svg';
import sea_weed from '../src/assets/images/Seaweed.svg';
import water from '../src/assets/images/Water.svg';

// export const EachIngredient = ({ ingredient }) => {
//   return (
//     <div>

//     </div>
//   );
// };
export class Ingredient extends Component {
  render() {
    const ingredients = [
      {
        title: 'rice',
        image: rice,
        backgroundcolor: '#FFFFFF',
      },
      {
        title: 'green_onion',
        image: green_onion,
        backgroundcolor: '#8CC638',
      },
      {
        title: 'sea_weed',
        image: sea_weed,
        backgroundcolor: '#4C4B4A',
      },
      {
        title: 'meat',
        image: meat,
        backgroundcolor: '#84604A',
      },
      {
        title: 'egg',
        image: egg,
        backgroundcolor: '#F3CE95',
      },
      {
        title: 'water',
        image: water,
        backgroundcolor: '#B4DCE9',
      },
    ];

    const ingredientList = ingredients.map((ingredient) => ({ ingredient }));
    return (
      <div>
        <div>재료이름 : {ingredientList.title}</div>
        <div>재료사진 : {ingredientList.image}</div>
        <div>배경색깔 : {ingredientList.backgroundcolor}</div>
      </div>
    );
  }
}
