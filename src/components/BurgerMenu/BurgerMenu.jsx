import css from "../BurgerMenu/BurgerMenu.module.css";
import { Link } from "./Link/Link"


const BurgerMenu = ( page ) => {
    return (
        <nav className={css.wrapper}>
            <div className={css.linkList}>
            <Link page="Mint" />
            <Link page="Arts" />
            <Link page="Faq" />
            <Link page="M-map" />
            <Link page="About" />
            </div>
            
            <button className={css.navBtn}>CLOSE</button>            
        </nav>
    )
};

export default BurgerMenu;