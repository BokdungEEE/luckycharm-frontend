import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import GangwonEdu_OTFBoldA from './GangwonEdu_OTFBoldA.woff';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    margin : 0;
    padding:0;
<<<<<<< HEAD
    font-family: 'GangwonEdu_OTFBoldA';

  }
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url(${GangwonEdu_OTFBoldA}) format('woff')
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'GangwonEdu_OTFBoldA';
    border: none;
    font-weight: 400;
=======

    
>>>>>>> 317c5e0d2999ad876e41bdc3375937fe1dea5f73
  }
`;
