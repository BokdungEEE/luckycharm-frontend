import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import GangwonEdu_OTFBoldA from './GangwonEdu_OTFBoldA.woff';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url(${GangwonEdu_OTFBoldA}) format('woff')
  }
  body{
    margin : 0;
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
