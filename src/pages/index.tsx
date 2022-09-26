import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import Image from 'next/future/image';
import { Arrow } from '../components/Arrow';
import { HomeContainer, Product } from '../styles/home';
import Head from 'next/head';
import { Cart } from '../components/Cart';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  currency: string;
  productId: string;
}

interface HomeProps {
  products: IProduct[];
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + 'px';
  }
  slider.on('created', updateHeight);
  slider.on('slideChanged', updateHeight);
};

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 2,
        spacing: 48,
      },

      breakpoints: {
        '(max-width:768px)': {
          slides: {
            perView: 1,
            spacing: 48,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },

      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );

  function handlePrev() {
    instanceRef.current?.prev();
  }
  function handleNext() {
    instanceRef.current?.next();
  }

  function handleAddItem(product: IProduct, e: FormEvent) {
    e.preventDefault();
    addItem(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => (
          <Link
            href={`/product/${product.productId}`}
            key={product.productId}
            prefetch={false}
            passHref
          >
            <Product className='keen-slider__slide'>
              <Image src={product.image} width={520} height={520} alt='' />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {formatCurrencyString({
                      value: product.price,
                      currency: product.currency,
                    })}
                  </span>
                </div>
                <Cart onClick={(e) => handleAddItem(product, e)} />
              </footer>
            </Product>
          </Link>
        ))}

        {loaded && instanceRef.current && (
          <>
            {instanceRef.current.track.details.abs !== 0 && (
              <Arrow left onClick={handlePrev} />
            )}
            <Arrow
              onClick={handleNext}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length -
                  // @ts-ignore
                  instanceRef.current.options.slides?.perView
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: price.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount,
      description: product.description,
      currency: price.currency,
      productId: product.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
