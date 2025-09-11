'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import clsx from 'clsx';

type BannerImage = { src: string; alt?: string };

interface BannerSwiperProps {
  images?: BannerImage[];
  className?: string;
}

const DEFAULT_IMAGES: BannerImage[] = [
  { src: '/images/banner/Home banner01.png', alt: '배너 1' },
  { src: '/images/banner/Home banner02.png', alt: '배너 2' },
  { src: '/images/banner/Home banner03.png', alt: '배너 3' },
  { src: '/images/banner/Home banner04.png', alt: '배너 4' },
];

export default function BannerSwiper({
  images = DEFAULT_IMAGES,
  className = '',
}: BannerSwiperProps) {
  const [active, setActive] = React.useState(0);

  const swiperRef = React.useRef<import('swiper').Swiper | null>(null);
  const isLoop = images.length > 1;

  return (
    <section className={clsx('w-full flex flex-col gap-m', className)}>
      <Swiper
        modules={[Autoplay]}
        loop={isLoop}
        onSwiper={(s) => (swiperRef.current = s)}
        autoplay={
          isLoop
            ? {
                delay: 4000, // 3초마다
                disableOnInteraction: false,
              }
            : false
        }
        allowTouchMove={false}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="w-full"
      >
        {images.map(({ src, alt }, idx) => (
          <SwiperSlide key={src + idx}>
            <Image
              src={src}
              alt={alt ?? `배너 ${idx + 1}`}
              width={360}
              height={80}
              priority={idx === 0}
              unoptimized
              className="w-full h-20 ds-rounded-m object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 하단 스와이퍼 */}
      <div className="flex justify-center items-center gap-2">
        {images.map((_, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              className={clsx(
                'h-2 ds-rounded-full transition-all duration-200',
                isActive ? 'w-6 bg-Fill-50' : 'w-2 bg-Fill-95'
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
