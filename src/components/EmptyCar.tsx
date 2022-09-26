import { ShoppingCartSimple } from 'phosphor-react';
import { Container, ItemContainer } from '../styles/empty-cart';

export function EmptyCart() {
  return (
    <Container>
      <ItemContainer>
        <ShoppingCartSimple size={48} weight='light' />
      </ItemContainer>
      <p>Carrinho vazio</p>
    </Container>
  );
}
