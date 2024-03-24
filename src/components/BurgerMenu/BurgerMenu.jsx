import css from "../BurgerMenu/BurgerMenu.module.css";
import { Link } from "./Link/Link";
import { useEffect } from "react";


const BurgerMenu = ({ page, handleCloseMenu, isCloseMenu }) => {


    return (
        <nav className={css.wrapper}>
            {isCloseMenu && (<div className={css.linkList}>
                
            <Link page="Mint" />
            <Link page="Arts" />
            <Link page="Faq" />
            <Link page="M-map" />
            <Link page="About" />
            </div>
            )}
            
            <button className={css.navBtn} onClick={handleCloseMenu}>
            { isCloseMenu ? "CLOSE" : "MENU" }</button>            
        </nav>
    )
};

export default BurgerMenu;