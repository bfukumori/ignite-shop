import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      Roboto: "Roboto",
    },
    fontSizes: {
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    lineHeights: {
      160: 1.6,
    },
    colors: {
      white: "#FFFFFF",

      background: "#121214",
      elements: "#202024",
      text: "#C4C4CC",
      title: "#E1E1E6",

      green: "#00875F ",
      greenLight: "#00B37E",
    },
  },
});
