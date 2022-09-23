import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { HomeContainer, Product } from '../styles/home';
import camiseta1 from '../assets/mock/1.png';
import camiseta2 from '../assets/mock/2.png';
import camiseta3 from '../assets/mock/3.png';
import { FormEvent, useState } from 'react';
import { Arrow } from '../components/Arrow';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function handlePrev() {
    instanceRef.current?.prev();
  }
  function handleNext() {
    instanceRef.current?.next();
  }

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,90</span>
        </footer>
      </Product>
      {loaded && instanceRef.current && (
        <>
          <Arrow left disabled={currentSlide === 0} onClick={handlePrev} />
          <Arrow
            onClick={handleNext}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 3
            }
          />
        </>
      )}
    </HomeContainer>
  );
}
