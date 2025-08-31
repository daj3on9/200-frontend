'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { cn } from '@/lib/utils';

type BannerImage = { src: string; alt?: string };

interface BannerSwiperProps {
  images?: BannerImage[];
  className?: string;
}

const DEFAULT_IMAGES: BannerImage[] = [
  { src: 'https://placehold.co/360x80?text=Banner+1', alt: '배너 1' },
  { src: 'https://placehold.co/360x80?text=Banner+2', alt: '배너 2' },
  { src: 'https://placehold.co/360x80?text=Banner+3', alt: '배너 3' },
  { src: 'https://placehold.co/360x80?text=Banner+4', alt: '배너 4' },
  { src: 'https://placehold.co/360x80?text=Banner+5', alt: '배너 5' },
];

export default function BannerSwiper({
  images = DEFAULT_IMAGES,
  className = '',
}: BannerSwiperProps) {
  const [active, setActive] = React.useState(0);
  const swiperRef = React.useRef<import('swiper').Swiper | null>(null);
  const isLoop = images.length > 1;

  return (
    <section className={cn('w-full flex flex-col gap-m', className)}>
      <Swiper
        loop={isLoop}
        onSwiper={(s) => (swiperRef.current = s)}
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
              className={cn(
                'h-2 ds-rounded-full',
                isActive ? 'w-6 bg-Fill-50' : 'w-2 bg-Fill-95'
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
