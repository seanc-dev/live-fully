const theme = {
  fontFamily: "Cerebri",
  colors: {
    main: "#4292a2",
    secondary: "#oc2c47",
    tfBackground: "#004f73",
    fonts: {
      main: "#0c2c47",
      secondary: "#2a2c34",
    },
  },
  fontSizes: {
    body: {
      desktop: "16px",
      tablet: "18px",
      mobile: "24px",
    },
  },
};

type ThemeType = typeof theme;

export { ThemeType };

export default theme;
