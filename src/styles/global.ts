import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$background",
    color: "$white",
  },

  " body, input,textarea,button": {
    fontFamily: "$Roboto",
    fontWeight: "$regular",
  },
});
