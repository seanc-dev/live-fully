import { createGlobalStyle } from "styled-components";
import theme from "./theme.tsx";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  root {
    
    font-size: ${theme.fontSizes.body.mobile};
    font-family: Cerebri
    color: ${theme.colors.fonts.main};

      @media (min-width: 768px) {
        font-size: ${theme.fontSizes.body.tablet};
      }

      @media (min-width: 1024px) {
        font-size: ${theme.fontSizes.body.desktop};
      }
    }
`;

export default Global;
