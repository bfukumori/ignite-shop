import { styled } from './stitches.config';

export const CartContainer = styled('button', {
  variants: {
    full: {
      true: {
        color: '$gray300',
      },
    },
    colorType: {
      primary: {
        backgroundColor: '$green500',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$gray800',
        color: '$gray500',
      },
    },
    size: {
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 56,
        height: 56,
      },
    },
  },
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  border: 'none',
  cursor: 'pointer',

  span: {
    width: 30,
    height: 30,
    backgroundColor: '$green500',
    color: '$white',
    borderRadius: '50%',
    border: '3px solid $gray900',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    right: -10,
    cursor: 'default',
  },
});
