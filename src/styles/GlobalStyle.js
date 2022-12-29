import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import GangwonEdu_OTFBoldA from './GangwonEdu_OTFBoldA.woff';

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
  }
`;
