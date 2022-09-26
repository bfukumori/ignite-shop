import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import {
  ImageContainer,
  SuccessContainer,
  ImagesWrapper,
} from '../styles/success';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/router';

interface SuccessProps {
  customerName: string;
  products: Stripe.LineItem[];
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();
  const { push } = useRouter();

  function handleBackToHome() {
    clearCart();
    push('/');
  }

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImagesWrapper>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image
                // @ts-ignore
                src={product.price?.product.images[0]}
                width={120}
                height={110}
                alt=''
              />
            </ImageContainer>
          ))}
        </ImagesWrapper>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra já está a caminho da
          sua casa.
        </p>
        <button onClick={handleBackToHome}>Voltar ao catálogo</button>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });
  const customerName = session.customer_details?.name;
  const products = session.line_items?.data!;

  return {
    props: {
      customerName,
      products,
    },
  };
};
