import { ReactNode } from 'react';
import { ButtonContainer } from '../styles/button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}
