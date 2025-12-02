import React, { useEffect, useMemo, useState } from 'react';

interface HeroSliderProps {
  images: string[];
  intervalMs?: number; // default 5000
  fadeMs?: number; // default 800
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images, intervalMs = 5000, fadeMs = 800 }) => {
  const [index, setIndex] = useState(0);

  // Preload images once
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return; // no rotation when a single image is provided
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const wrappers = useMemo(
    () => images.map((src, i) => ({ src, active: i === index })),
    [images, index]
  );

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Subtle consistent readability overlay (extra safety for text) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(82,83,82,0.22) 0%, rgba(82,83,82,0.08) 35%, rgba(82,83,82,0.00) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Slides */}
      {wrappers.map(({ src, active }, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: active ? 1 : 0,
            transition: `opacity ${fadeMs}ms ease-in-out`,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
