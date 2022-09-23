import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$white',
  },

  ' body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
});
