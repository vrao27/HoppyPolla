import React, { useState } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const images = [
    { src: '', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' }
  ];

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="carousel">
      <button onClick={prev}>Prev</button>
      <img onClick={openModal} src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <button onClick={next}>Next</button>
      {modalOpen && (
        <div className="modal">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
