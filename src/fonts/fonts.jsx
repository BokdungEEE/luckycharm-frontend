import { createGlobalStyle } from 'styled-components';
import GangwonEdu_OTFBoldA from './GangwonEdu_OTFBoldA.woff';

const GlobalFonts = createGlobalStyle`
    @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url(${GangwonEdu_OTFBoldA}) format('woff')
    }
  `;

export default GlobalFonts;
