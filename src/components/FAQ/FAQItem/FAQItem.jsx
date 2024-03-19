import React, { useState } from "react";
import css from "./FAQItem.module.css";

const FAQItem = ({ img, number, question, answer, isOpen, onItemClick }) => {


  return (
    <div className={isOpen ? css.faqItemWrapperOpen : css.faqItemWrapper} onClick={onItemClick}>
      {isOpen &&<div className={css.faqImgBox}>
      <img className={css.faqImg} src={img} alt="ape" />
      </div>}
      <p className={isOpen ? css.numberOpen : css.number}>[ {number} ]</p>
      <div className={css.questionBox}>
        <h1 className={isOpen ? css.questionOpen : css.question}>{question}</h1>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQItem;