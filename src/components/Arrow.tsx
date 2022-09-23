import { CaretLeft, CaretRight } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { ArrowContainer } from '../styles/arrow';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  left?: boolean;
}

export function Arrow({ left, ...rest }: ArrowProps) {
  return (
    <ArrowContainer right={!left} {...rest}>
      {left ? <CaretLeft size={48} /> : <CaretRight size={48} />}
    </ArrowContainer>
  );
}
