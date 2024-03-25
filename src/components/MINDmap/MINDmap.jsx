import css from "../MINDmap/MINDmap.module.css";
import upLeftArrow from "../../assets/up-left-arrow.svg";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MINDmapItem from './MINDmapItem/MINDmapItem';

const gridItems = [
  {
    upperText:
      "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
    lowerText: "YAPE DROP"
  },
  {
    upperText:
      "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
    lowerText: "New Collection"
  },
  {
    upperText:
      "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
    lowerText: "Token"
  },
  // {
  //   upperText: "Learn more in mind map",
  //   lowerText: "",
  //   link: "#hero",
  //   imageSrc: upLeftArrow,
  //   imageAlt: "up Left Arrow"
  // }
];

const MINDmap = ({ setSelectedPage }) => {
  const [openIndex, setOpenIndex] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0); 

  const handleNextSlide = () => {
    const newIndex = Math.min(slideIndex + 1, gridItems.length - 1);
    setSlideIndex(newIndex);
  };

  const handlePrevSlide = () => {
    const newIndex = Math.max(slideIndex - 1, 0);
    setSlideIndex(newIndex);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleTouchStart = () => {
    const slidesInner = document.querySelector(".slidesInner");
    if (slidesInner) {
      slidesInner.setAttribute("draggable", "false");
    }
  };

  const handleTouchEnd = () => {
    const slidesInner = document.querySelector(".slidesInner");
    if (slidesInner) {
      slidesInner.setAttribute("draggable", "true");
    }
  };

  const handleDragEnd = ({}) => {
    const slidesInner = document.querySelector(".slidesInner");
    if (slidesInner) {
      slidesInner.setAttribute("draggable", "true");
    }
  };

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };



  return (
    <section id="mmap" className={css.section}>
      <motion.div
        onViewportEnter={() => setSelectedPage("mmap")}
      >
        <h1 className={css.title}>MIND map</h1>

        <div className={css.gridContainer}>
          <div className={css.containerItem}>
            <p className={css.upperElement}>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <p className={css.lowerElement}>YAPE DROP</p>
          </div>
          <div className={css.containerItem}>
            <p className={css.upperElement}>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <p className={css.lowerElement}>New Collection</p>
          </div>
          <div className={css.containerItem}>
            <p className={css.upperElement}>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <p className={css.lowerElement}>Token</p>
          </div>
          <a className={css.linkMint} href="#hero">
            <div className={`${css.containerItem} ${css.addColor}`}>
              <img
                className={`${css.upperElement} ${css.upLeftArrow}`}
                src={upLeftArrow}
                alt="up Left Arrow"
              />
              <p className={css.lowerElement}>
                Learn <br />
                more <br />
                in mind map
              </p>
            </div>
          </a>
        </div>


        {/* Slider */}

       <div className={css.slider}>
        <div className={`${css.slides} ${css.container}`}>
          <div
            className={css.slidesInner}
            style={{ transform: `translate3d(-${slideIndex * 240}px, 0, 0)` }}
            draggable={true}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={css.slide}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
              >
                <MINDmapItem upperText={item.upperText} lowerText={item.lowerText} />
              </div>
            ))}
          </div>


{/* <div className={css.gridContainer}> */}
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


      </motion.div>
    </section>
  );
};

export default MINDmap;
