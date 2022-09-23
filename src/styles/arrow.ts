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

  '&:hover': {
    color: '$gray100',
  },

  '&:disabled': {
    color: '$gray800',
    cursor: 'default',
  },
});
