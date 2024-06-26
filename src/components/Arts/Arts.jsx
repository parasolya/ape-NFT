import css from "../Arts/Arts.module.css";
import React, { useState, useEffect } from "react";
import Ape1 from "../../assets/slides/ape1.png";
import Ape2 from "../../assets/slides/ape2.png";
import Ape3 from "../../assets/slides/ape3.png";
import Ape4 from "../../assets/slides/ape4.png";
import Ape5 from "../../assets/slides/ape5.png";
import Ape6 from "../../assets/slides/ape6.png";
import Ape7 from "../../assets/slides/ape7.png";
import Ape8 from "../../assets/slides/ape8.png";
import Ape9 from "../../assets/slides/ape9.png";
import Ape10 from "../../assets/slides/ape10.png";
import Ape11 from "../../assets/slides/ape11.png";
import Ape12 from "../../assets/slides/ape12.png";
import Ape13 from "../../assets/slides/ape13.png";
import Ape14 from "../../assets/slides/ape14.png";
import Ape15 from "../../assets/slides/ape15.png";
import Ape16 from "../../assets/slides/ape16.png";
import Ape17 from "../../assets/slides/ape17.png";
import Ape18 from "../../assets/slides/ape18.png";
import Ape19 from "../../assets/slides/ape19.png";
import Ape20 from "../../assets/slides/ape20.png";
import Ape21 from "../../assets/slides/ape21.png";
import Ape22 from "../../assets/slides/ape22.png";
import Ape23 from "../../assets/slides/ape23.png";
import { motion } from "framer-motion";

const slides = [
  { image: Ape1, alt: "Ape 1" },
  { image: Ape2, alt: "Ape 2" },
  { image: Ape3, alt: "Ape 3" },
  { image: Ape4, alt: "Ape 4" },
  { image: Ape5, alt: "Ape 5" },
  { image: Ape6, alt: "Ape 6" },
  { image: Ape7, alt: "Ape 7" },
  { image: Ape8, alt: "Ape 8" },
  { image: Ape9, alt: "Ape 9" },
  { image: Ape10, alt: "Ape 10" },
  { image: Ape11, alt: "Ape 11" },
  { image: Ape12, alt: "Ape 12" },
  { image: Ape13, alt: "Ape 13" },
  { image: Ape14, alt: "Ape 14" },
  { image: Ape15, alt: "Ape 15" },
  { image: Ape16, alt: "Ape 16" },
  { image: Ape17, alt: "Ape 17" },
  { image: Ape18, alt: "Ape 18" },
  { image: Ape19, alt: "Ape 19" },
  { image: Ape20, alt: "Ape 20" },
  { image: Ape21, alt: "Ape 21" },
  { image: Ape22, alt: "Ape 22" },
  { image: Ape23, alt: "Ape 23" },
];

const Arts = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [transformValue, setTransformValue] = useState(0);
  const [draggable, setDraggable] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const [previousClientX, setPreviousClientX] = useState(0);
  const [previousTouchX, setPreviousTouchX] = useState(0);

  console.log(` slideIndex1 ${slideIndex}`);
  console.log(previousClientX);
  console.log(draggable);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlideWidth(264);
      } else if (width >= 768) {
        setSlideWidth(308);
      } else {
        setSlideWidth(240);
      }
      setTransformValue(-slideIndex * slideWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slideIndex, slideWidth]);

  const handleNextSlide = () => {
    console.log("Nex");
    const newIndex = Math.min(slideIndex + 1, slides.length - 1);
    setDraggable(false);
    setSlideIndex(newIndex);
  };

  const handlePrevSlide = () => {
    console.log("Prev");
    const newIndex = Math.max(slideIndex - 1, 0);
    console.log(newIndex);
    setDraggable(false);
    setSlideIndex(newIndex);
  };

  const handleDragStart = (event, index) => {
    setPreviousClientX(event.clientX);
  };

  const handleDragEnd = (event) => {
    const deltaX = event.clientX - previousClientX;
    const newIndex = deltaX > 0 ? slideIndex - 1 : slideIndex + 1;
    setSlideIndex(Math.min(Math.max(newIndex, 0), slides.length - 1));
  };

  const handleTouchStart = (event) => {
    setPreviousTouchX(event.touches[0].clientX);
    setDraggable(false);
  };

  const handleTouchEnd = (event) => {
    if (event.changedTouches && event.changedTouches.length > 0) {
      const currentTouchX = event.changedTouches[0].clientX;
      const deltaX = currentTouchX - previousTouchX;
      const newIndex = deltaX > 0 ? slideIndex - 1 : slideIndex + 1;
      setSlideIndex(Math.min(Math.max(newIndex, 0), slides.length - 1));
    }
    setDraggable(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  return (
    <section id="arts" className={css.section}>
      <h1 className={css.title}>COLLECTION</h1>
      <div className={css.slider}>
        <div className={`${css.slides} ${css.container}`}>
          <div
            className={css.slidesInner}
            style={{ transform: `translate3d(${transformValue}px, 0, 0)` }}
            draggable={draggable}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={css.slide}
                draggable={draggable}
                onDragStart={(e) => handleDragStart(e, index)}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
              >
                <img
                  className={css.img}
                  src={slide.image}
                  alt={slide.alt}
                  draggable="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={css.btnBox}>
        <button
          className={`${css.textDecorated} ${css.btn} ${css.prev}`}
          onClick={handlePrevSlide}
        >
          Prev
        </button>
        <button
          className={`${css.textDecorated} ${css.btn}`}
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Arts;
