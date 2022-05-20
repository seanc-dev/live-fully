import React from "react";
import px2vw from "../utils/px2vw";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :root {
          font-size: ${px2vw(24)};

          @media (min-width: 768px) {
            font-size: ${px2vw(18)};
          }

          @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
