import css from "./Hero.module.css";
import heroAPE1 from "../../assets/heroAPE1.png"
import { motion } from "framer-motion";

const Hero = ({ setSelectedPage }) => {

    function scrollToMint() {
        const heroSection = document.getElementById("mmap");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" });
        }
      }

    return (
        <section id="hero" className={css.section}>
            <motion.div
        // className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage("hero")}
      >
        <div className={css.wrapper}>
        <div>
            <p className={css.textDecorated}>diD yOu seE iT ?</p>
            <h1 className={css.title}>
  <span>YACHT</span>
  <span>APES</span>
</h1>
            {/* <h1 className={css.title}>YACHT TTTT<span>APES</span></h1> */}
            <div className={css.textBox}>
                <p className={css.textDecorated}>Apes aRe eveRywhere</p>
                <div className={css.boxImg}><img className={css.heroImg} src={heroAPE1} alt='hero Ape 1' /></div>
                <div className={css.infoBox}>                
                <p className={css.textInfo}>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
                <button className={css.heroBtn} onClick={() => scrollToMint()}>MEET APES</button>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
        </section>
    )
};

export default Hero;