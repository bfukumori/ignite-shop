import { styled } from './stitches.config';

export const ArrowContainer = styled('button', {
  variants: {
    right: {
      true: {
        right: 0,
      },
    },
  },

  color: '$gray300',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: 328,
  transform: 'translateY(-50%)',

  '&:not(:disabled):hover': {
    color: '$gray100',
  },

  '&:disabled': {
    opacity: 0.3,
    cursor: 'default',
  },
});
