import { styled } from './stitches.config';

export const CartModalContainer = styled('div', {
  width: 480,
  backgroundColor: '$gray800',
  position: 'absolute',
  top: 0,
  right: 0,
});

export const CloseButton = styled('button', {
  color: '$gray500',
  width: '100%',
  marginLeft: 'auto',
  padding: 24,
  textAlign: 'end',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
});

export const Title = styled('p', {
  fontWeight: 'bold',
  fontSize: '$lg',
  color: '$gray100',
  padding: '0 48px',
  marginBottom: '32px',
});
export const ProductsList = styled('div', {
  padding: '0 48px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const ProductItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const Content = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 400,
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 700,
    marginTop: 8,
  },

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '$green500',
    fontWeight: 700,
    fontSize: '$sm',
    cursor: 'pointer',
  },
});

export const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 14,

  span: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '$gray500',
  },
});

export const ImageContainer = styled('div', {
  width: '100px',
  height: '93px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  overflow: 'hidden',
});

export const CartTotal = styled('footer', {
  width: '100%',
  marginTop: 198,
  padding: '0 48px',
});

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 7,

  'span:nth-child(1)': {
    color: '$gray100',
    fontSize: '$sm',
  },
  'span:nth-child(2)': {
    color: '$gray300',
    fontSize: '$md',
  },
});

export const Value = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 7,

  'span:nth-child(1)': {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 700,
  },
  'span:nth-child(2)': {
    color: '$gray100',
    fontSize: '$xl',
    fontWeight: 700,
  },
});

export const ButtonContainer = styled('div', {
  marginTop: 50,
  marginBottom: 48,
  padding: '0 48px',
});
