import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body{
    margin : 0 auto;
    padding:0;
    font-family: 'GangwonEdu_OTFBoldA';
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'GangwonEdu_OTFBoldA';
    border: none;
    font-weight: 400;
  }
`;
