import { styled } from '../styles/stitches.config';

export const Container = styled('div', {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  position: 'absolute',
  transform: 'translate(100%,50%)',

  p: {
    fontSize: '$lg',
    color: '$gray500',
  },
});

export const ItemContainer = styled('div', {
  color: '$gray500',
});
