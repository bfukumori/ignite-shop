import { Handbag } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { CartContainer } from '../styles/cart';
import { useShoppingCart } from 'use-shopping-cart';

interface CartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isHeader?: boolean;
}

export function Cart({ isHeader = false, ...rest }: CartProps) {
  const { cartCount } = useShoppingCart();

  return (
    <CartContainer
      full={cartCount !== 0}
      size={isHeader ? 'md' : 'lg'}
      colorType={isHeader ? 'secondary' : 'primary'}
      {...rest}
    >
      <Handbag size={24} weight='bold' />
      {isHeader && <span>{cartCount}</span>}
    </CartContainer>
  );
}
