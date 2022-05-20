import "@emotion/react";

// and extend them!
declare module "@emotion/react" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      font: {
        main: string;
        secondary: string;
      };
    };
  }
}
