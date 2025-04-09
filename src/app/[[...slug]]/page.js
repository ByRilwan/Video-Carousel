"use client"
import Link from 'next/link';
import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import brightcovePlayerLoader from '@brightcove/player-loader';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    plugins: [Autoplay({ delay: 2000 })],
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi]);

  useEffect(() => {
    brightcovePlayerLoader();
  }, [])

  return (
    <div className="embla">
    <div className="embla__viewport mx-auto mt-12 h-500 max-w-lg border" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide embla__slide flex items-center justify-center">
          <iframe
            src="https://players.brightcove.net/6057949401001/default_default/index.html?videoId=6361867842112"
            width="100%"
            height="500"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="border-none"
          ></iframe>
        </div>
        <div className="embla__slide embla__slide flex items-center justify-center">
          <iframe
            src="https://players.brightcove.net/6057949401001/default_default/index.html?videoId=6361737263112"
            width="100%"
            height="500"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="border-none"
          ></iframe>
        </div>
        <div className="embla__slide embla__slide flex items-center justify-center">
          <iframe
            src="https://players.brightcove.net/6057949401001/default_default/index.html?videoId=6360358040112"
            width="100%"
            height="500"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="border-none"
          ></iframe>
        </div>
      </div>
      </div>

      <div className="embla__button mt-4 flex justify-center">
        <button className="embla__prev items-center" onClick={scrollPrev}>
          Prev
          </button>
        <button className="embla__next items-center" onClick={scrollNext}>
          Next
          </button>
      </div>
    </div>
  
  );
}

