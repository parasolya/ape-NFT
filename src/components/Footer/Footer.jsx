
import css from './Footer.module.css'; // Доданий імпорт модуля стилів

import React, { useState } from 'react';

const Footer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    const newIndex = Math.min(slideIndex + 1, 3); // Максимальний індекс слайда - 3
    setSlideIndex(newIndex);
  };

  const handlePrevSlide = () => {
    const newIndex = Math.max(slideIndex - 1, 0); // Мінімальний індекс слайда - 0
    setSlideIndex(newIndex);
  };

  const slidePosition = {
    transform: `translate3d(-${slideIndex * 250}px, 0, 0)`, // 200px - ширина слайда
  };
  
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    // <section className={css.section}>
    //   <h1 className={css.title}>COLLECTION</h1>
    //   <div className={css.slider}>  
    //     <div className={`${css.container}`} >
    //       <section className={css.child} style={slidePosition}>1</section>
    //       <section className={css.child} style={slidePosition}>2</section>
    //       <section className={css.child} style={slidePosition}>3</section>
    //       <section className={css.child} style={slidePosition}>4</section>
    //     </div>
    //   </div>
    //   <div className={css.btnBox}>
    //     <button className={`${css.textDecorated} ${css.btn} ${css.prev}`} onClick={handlePrevSlide}>Prev</button>
    //     <button className={`${css.textDecorated} ${css.btn}`} onClick={handleNextSlide}>Next</button>
    //   </div>
    // </section>

 <section className={css.section}>
<h1 className={css.title}>COLLECTION</h1>
<div className={css.slider}>  
  <div className={`${css.container}`} >
    {slides.map((slide) => (
      <section key={slide} className={css.child} style={slidePosition}>{slide}</section>
    ))}
  </div>
</div>
<div className={css.btnBox}>
  <button className={`${css.textDecorated} ${css.btn} ${css.prev}`} onClick={handlePrevSlide}>Prev</button>
  <button className={`${css.textDecorated} ${css.btn}`} onClick={handleNextSlide}>Next</button>
</div>
</section> 

  );
};

export default Footer;