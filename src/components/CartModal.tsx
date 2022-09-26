import { Minus, Plus, X } from 'phosphor-react';
import {
  CartModalContainer,
  CloseButton,
  ProductsList,
  ProductItem,
  Content,
  ImageContainer,
  Title,
  CartTotal,
  Quantity,
  Value,
  ButtonContainer,
  Footer,
} from '../styles/modal';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import { Button } from './Button';
import { useShoppingCart } from 'use-shopping-cart';
import { CartEntry, formatCurrencyString } from 'use-shopping-cart/core';
import { EmptyCart } from './EmptyCar';

export function CartModal({ ...rest }) {
  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useShoppingCart();

  const products = Object.entries(cartDetails!)
    .map((item) => item.splice(1))
    .flat() as CartEntry[];

  async function handleBuyProducts() {
    try {
      await redirectToCheckout();
      clearCart();
    } catch (error: any) {
      switch (error.type) {
        case 'StripeCardError':
          console.log(`A payment error occurred: ${error.message}`);
          break;
        case 'StripeInvalidRequestError':
          console.log('An invalid request occurred.');
          break;
        default:
          console.log(error.message);
          break;
      }
    }
  }
  return (
    <CartModalContainer {...rest}>
      <CloseButton>
        <Dialog.Close asChild>
          <X weight='bold' size={24} />
        </Dialog.Close>
      </CloseButton>
      <Dialog.Title>
        <Title>Sacola de compras</Title>
      </Dialog.Title>
      <ProductsList>
        {products.length === 0 ? (
          <EmptyCart />
        ) : (
          products.map((product) => (
            <ProductItem key={product.id}>
              <ImageContainer>
                <Image src={product.image!} width={100} height={93} alt='' />
              </ImageContainer>
              <Content>
                <h2>{product.name}</h2>
                <span>
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </span>
                <Footer>
                  <button type='button' onClick={() => removeItem(product.id)}>
                    Remover
                  </button>
                  <Minus
                    onClick={() => decrementItem(product.id)}
                    cursor='pointer'
                  />
                  <Plus
                    onClick={() => incrementItem(product.id)}
                    cursor='pointer'
                  />
                  <span>Qtd: {product.quantity}</span>
                </Footer>
              </Content>
            </ProductItem>
          ))
        )}
      </ProductsList>
      <CartTotal>
        <Quantity>
          <span>Quantidade</span>
          <span>{cartCount} itens</span>
        </Quantity>
        <Value>
          <span>Valor total</span>
          <span>{formattedTotalPrice}</span>
        </Value>
      </CartTotal>
      <ButtonContainer>
        <Button disabled={cartCount === 0} onClick={handleBuyProducts}>
          Finalizar compra
        </Button>
      </ButtonContainer>
    </CartModalContainer>
  );
}
