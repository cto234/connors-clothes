import '../styles/carousel.scss'
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {photos.map((photo, index) => (
            <div className="embla__slide" key={index}>
              <img className='carousel-image' src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        &lt;
      </button>
      <button className="embla__next" onClick={scrollNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
