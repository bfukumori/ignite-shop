import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { Layout } from '../components/Layout';
import { CartProvider } from 'use-shopping-cart';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}`}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/`}
      currency='BRL'
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
