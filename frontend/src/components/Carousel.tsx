import React, { useState } from 'react';
import { GalleryProps } from '../types';

const Carousel: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevSlide = (): void => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = (): void => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '50px',
        alignItems: 'center',
      }}
    >
      <button onClick={goToPrevSlide}>Prev</button>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].title}
        style={{ maxWidth: '100%' }}
      />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
