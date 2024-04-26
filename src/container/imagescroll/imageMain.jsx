import React from 'react';
import ImageRotator from './ImageRotator';
import img1 from '../../assets/poki1.png';
import img2 from '../../assets/poki2.png';
import img3 from '../../assets/poki3.png';
import img4 from '../../assets/poki4.png';
import img5 from '../../assets/poki5.png';
const Imgscroll = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
    // Add more image URLs here as needed
  ];

  return (
    <div>
      <h2>Choose your Pokemon</h2>
      <ImageRotator images={images} interval={3000} />
    </div>
  );
};

export default Imgscroll;