import { styled } from './stitches.config';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 656,
  margin: '0 auto',
  padding: '0 2rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  button: {
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    border: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '9999px',
  overflow: 'hidden',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',
  boxShadow: '0 0 60px 0 rgba(0, 0, 0, 0.8)',

  '& + &': {
    marginLeft: '-40px',
  },

  img: {
    width: '100%',
    objectFit: 'cover',
  },
});

export const ImagesWrapper = styled('div', {
  display: 'flex',
});
