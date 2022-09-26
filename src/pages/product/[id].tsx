import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Stripe from 'stripe';
import { Button } from '../../components/Button';
import { stripe } from '../../lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/product';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { IProduct } from '..';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.image} width={520} height={520} alt='' priority />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </span>
          <p>{product.description}</p>
          <Button onClick={() => addItem(product)}>
            Adicionar ao carrinho
          </Button>
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
    id: price.id,
    name: response.name,
    image: response.images[0],
    price: price.unit_amount,
    description: response.description,
    currency: price.currency,
    productId: response.id,
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
