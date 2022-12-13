import React from 'react';
// import { MobileView } from 'react-device-detect';
import { GlobalStyle } from './styles/GlobalStyle';
import { IngredientButton } from './styles/theme';
import { LongButton } from './styles/theme';
import { Ingredient } from './ingredients';
import egg from '../src/assets/images/Egg.svg';
import green_onion from '../src/assets/images/Greenonion.svg';
import meat from '../src/assets/images/Meat.svg';
import rice from '../src/assets/images/Ricecake.svg';
import sea_weed from '../src/assets/images/Seaweed.svg';
import water from '../src/assets/images/Water.svg';

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <MobileView> */}
      <div>
        <button>
          <img src={egg} alt='egg' />
        </button>
        <button>
          <img src={green_onion} alt='green_onion' />
        </button>
        <button>
          <img src={meat} alt='meat' />
        </button>
        <button>
          <img src={rice} alt='rice' />
        </button>
        <button>
          <img src={sea_weed} alt='sea_weed' />
        </button>
        <button>
          <img src={water} alt='water' />
        </button>
      </div>

      <IngredientButton background='green'> 재료 </IngredientButton>
      <LongButton>친구에게 보내기</LongButton>
      <Ingredient />
      {/* </MobileView> */}
    </>
  );
};

export default App;
