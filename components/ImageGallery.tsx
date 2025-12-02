import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const FALLBACK = '/images/hero-1.svg';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [active, setActive] = useState(0);
  const [errored, setErrored] = useState(false);
  const main = images?.[active] ?? images?.[0];

  return (
    <div className="w-full">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-brand-light">
        {main && !errored ? (
          <img
            src={main}
            alt="Class gallery"
            className="w-full h-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 relative">
            <img src={FALLBACK} alt="Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 text-center px-4">
              <div className="font-semibold text-brand-dark">Add images to /public/images</div>
              <div className="text-xs text-gray-600">Expected: suncatcher-1.jpg, suncatcher-2.jpg, suncatcher-3.jpg</div>
            </div>
          </div>
        )}
      </div>
      {images?.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.slice(0, 5).map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setActive(i); setErrored(false); }}
              className={`relative aspect-[3/2] overflow-hidden rounded-md border ${
                i === active ? 'border-brand-green' : 'border-gray-200'
              }`}
            >
              <img src={src} alt="Thumbnail" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }} />
              {i === active && (
                <span className="absolute inset-0 ring-2 ring-brand-green rounded-md pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
