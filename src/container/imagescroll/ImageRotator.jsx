import React, { useState, useEffect } from 'react';
import './ImageRotator.css'; // Import CSS for animation

const ImageRotator = ({ images, interval, animationDuration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="image-rotator">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentIndex ? 'active' : ''}
          style={{ animationDuration: `${animationDuration}ms` }}
        />
      ))}
    </div>
  );
};

export default ImageRotator;
