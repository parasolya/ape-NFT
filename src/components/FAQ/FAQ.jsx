import React, { useState } from "react";
import css from "./FAQ.module.css";
import FAQItem from "./FAQItem/FAQItem";
import FAQItem1 from "../../assets/FAQItem1.png";
import FAQItem2 from "../../assets/FAQItem2.png";
import FAQItem3 from "../../assets/FAQItem3.png";
import FAQItem4 from "../../assets/FAQItem4.png";
import { motion } from "framer-motion";

const apeArray = [
  {
    number: 1,
    img: FAQItem1,
    question: "WHAT IS AN NFT COLLECTION?",
    answer:
      "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
  },
  {
    number: 2,
    img: FAQItem2,
    question: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    answer:
      "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.",
  },
  {
    number: 3,
    img: FAQItem3,
    question: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    answer:
      "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
  },
  {
    number: 4,
    img: FAQItem4,
    question: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    answer:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
  },
];

const FAQ = ({ setSelectedPage }) => {
  const [openIndex, setOpenIndex] = useState(1);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className={css.section}>
           <motion.div
        // className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage("faq")}
      >
      <h1 className={css.title}>FAQ</h1>
      <div className={css.apeArreyWrapper}>
        {apeArray.map((item, index) => (
          <FAQItem
            key={item.number}
            img={item.img}
            number={item.number}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            onItemClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default FAQ;