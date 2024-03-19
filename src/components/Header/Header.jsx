import css from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import discord_logo from "../../assets/discord_logo.png";
import logomarkBlue from "../../assets/logomark-Blue.png";
import logo from "../../assets/logo.png";


const Header = () => {
    return (
        <section className={css.section}>
        <div className={css.wrapper}>
            <div className={css.burgerMenu}>
            <BurgerMenu  />
            </div>
            {/* RIGHT SIDE */}

            <div className={css.headerLinks}>
                <div className={css.linkWrapper}>
                    <a className={css.link} href="#"><img className={css.linkDiscord} src={discord_logo} alt='discords logo' /></a>
                </div>
                <div className={css.linkWrapper}>
                    <a className={css.link} href="#"><img className={css.linkImg} src={logomarkBlue} alt='logomark Blue' /></a>
                </div>
                <div className={css.linkWrapper}>
                    <a className={css.link} href="#"><img className={css.linkImg} src={logo} alt='logotype Ape NFT' /></a>
                </div>
              
              
            </div>
        </div>
        </section>
    )
};

export default Header;