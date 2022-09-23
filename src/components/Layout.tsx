import { ReactNode } from 'react';
import { LayoutContainer } from '../styles/layout';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}
