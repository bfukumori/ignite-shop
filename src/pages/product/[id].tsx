import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { useState } from 'react';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/product';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error: any) {
      switch (error.type) {
        case 'StripeCardError':
          console.log(`A payment error occurred: ${error.message}`);
          break;
        case 'StripeInvalidRequestError':
          console.log('An invalid request occurred.');
          break;
        default:
          console.log('Another problem occurred, maybe unrelated to Stripe.');
          break;
      }
      setIsCreatingCheckoutSession(false);
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={520}
            alt=''
            priority
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            type='button'
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id!;

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = response.default_price as Stripe.Price;
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount! / 100),
    description: response.description,
    defaultPriceId: price.id,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list({ limit: 2 });
  const products = response.data;
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};
