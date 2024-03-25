import css from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import { useState, useEffect } from "react";
import { Link } from "../BurgerMenu/Link/Link";
import useScroll from "../../hooks/useScroll";

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isCloseMenu, setIsCloseMenu] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(true);

  
  const isScrolling = useScroll();

  // useEffect(() => {
  //   if (!isScrolling) {
  //     setIsCloseMenu(!isCloseMenu);
  //   }
  // }, [isScrolling]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onCloseMenu = () => {
    setIsCloseMenu(!isCloseMenu);
  };

  return (
    <section className={css.section}>
      
        <div className={css.wrapper}>
          <div className={css.logoIconHeder}>
            <a href="#hero">
              <svg
                className={`${css.logoHeder}  ${
                  !isScrolling ? css.isTopPage : ""
                }`}
                // width="80"
                // height="50"
                viewBox="0 0 48 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.351562 23.3809H3.49954C5.36093 23.3809 6.52369 24.2093 6.51162 25.4771C6.50643 26.0228 6.51162 26.7038 5.80553 27.327C6.29449 27.327 6.85542 27.9908 6.85542 29.3073C6.85542 30.9813 5.87753 31.8777 4.34096 31.8777H0.351562V23.3809ZM2.28262 25.2013V26.7439H3.80707C4.37093 26.7439 4.50568 26.2676 4.50568 26.0196V25.9608C4.50568 25.4771 4.31562 25.2249 3.80707 25.2249L2.28262 25.2013ZM2.28262 28.35V30.1753H4.07029C4.4976 30.1753 4.65886 29.7381 4.65886 29.3522V29.2255C4.65886 28.6429 4.38187 28.3612 3.87102 28.3612L2.28262 28.3495V28.35Z"
                  fill="white"
                />
                <path
                  d="M9.07654 28.1029L6.1543 23.3828H8.69526L10.1057 26.1515L11.6561 23.3828H13.9684L11.1349 28.1029V31.8791H9.07654V28.1029Z"
                  fill="white"
                />
                <path
                  d="M28.968 26.1279C28.968 27.8436 27.6007 29.2242 24.618 29.2242V31.8758H22.5332V23.3945H25.699C28.145 23.3945 28.968 24.4122 28.968 26.1279ZM24.618 27.6394H25.3454C26.2836 27.6394 27.0196 27.1151 27.0196 26.1279C27.0196 25.1407 26.4212 24.8713 25.3454 24.8713H24.618V27.64V27.6394Z"
                  fill="white"
                />
                <path
                  d="M0.351562 22.2368V11.1172H3.2997L6.67863 17.0666L10.2419 11.1172H13.19V22.2368H10.2419V17.1564L6.67863 22.2368L3.2997 17.1564V22.2368H0.351562Z"
                  fill="white"
                />
                <path
                  d="M16.8164 11.1172H20.8289L23.7563 22.2368H21.1508L20.4655 20.1688H17.0877L16.4536 22.2368H13.7969L16.817 11.1172H16.8164ZM18.8229 14.0516L17.4955 18.1233H20.0525L18.8229 14.0516Z"
                  fill="white"
                />
                <path
                  d="M34.082 11.1177H42.3477V13.6309H36.7141V15.3808H42.3477V17.8304H36.7141V19.9144H42.3477V22.2368H34.082V11.1172V11.1177Z"
                  fill="white"
                />
                <path
                  d="M29.4277 23.3945H35.7323V25.3117H31.4354V26.6464H35.7323V28.515H31.4354V30.1045H35.7323V31.8758H29.4277V23.3945Z"
                  fill="white"
                />
                <path
                  d="M16.7783 23.3945H19.8387L22.0716 31.8758H20.0846L19.5617 30.2985H16.985L16.5013 31.8758H14.4746L16.7783 23.3945ZM18.3091 25.633L17.2966 28.7384H19.2473L18.3091 25.633Z"
                  fill="white"
                />
                <path
                  d="M28.0803 22.2524L24.3281 22.2422V11.1226L28.0803 11.0879C31.5957 11.0879 33.4732 12.7213 33.4732 16.754C33.4732 19.8477 31.6711 22.2524 28.0803 22.2524ZM26.9112 19.8477H28.0803C29.7211 19.8477 30.722 18.846 30.722 16.754C30.722 14.662 29.9411 13.6866 28.0803 13.6866H26.9112V19.8477Z"
                  fill="white"
                />
                <path
                  d="M36.4822 25.7513C36.4822 24.4284 37.4701 23.4674 39.0682 23.3364C40.402 23.2269 41.6172 23.6903 42.539 24.2772L41.6966 26.0741C41.6966 26.0741 40.7539 25.5503 40.1997 25.3825C39.7649 25.2504 39.1868 25.375 39.0682 25.6577C38.9496 25.9405 38.9715 26.2296 39.3555 26.4146C39.3862 26.4295 39.4204 26.4456 39.4579 26.4637C39.67 26.5642 39.9901 26.7166 40.3529 26.9282H40.3589C40.3589 26.9282 41.1386 27.3307 41.7474 27.9774C41.7968 28.0266 41.8459 28.0774 41.8935 28.1287H41.8833C42.2097 28.5151 42.4579 28.9748 42.4579 29.4799C42.4579 30.8022 41.3193 31.8546 39.7212 31.9856C38.3874 32.0951 37.1683 31.5115 36.2461 30.9246L36.8976 29.125C36.8976 29.125 38.1866 29.6803 38.74 29.8487C39.1748 29.9807 39.7529 29.8562 39.8715 29.5734C39.9901 29.2907 40.0053 29.0892 39.5842 28.8166C39.4529 28.7316 39.2955 28.6434 39.1176 28.544C38.9846 28.4697 38.8402 28.389 38.687 28.2981C38.5204 28.2142 36.4804 27.1591 36.4804 25.7513H36.4822Z"
                  fill="white"
                />
                <path
                  d="M45.8574 12.942V11.0879H46.3205L46.8982 12.0799L47.4499 11.0879H47.9987V12.942H47.5357V12.027L46.8982 12.942L46.3494 12.027V12.942H45.8574Z"
                  fill="white"
                />
                <path
                  d="M43.9277 11.4781V11.0879H45.6833V11.4781H45.0434V12.942H44.5736V11.4781H43.9277Z"
                  fill="white"
                />
                <path
                  d="M9.97113 0.854203L8.97537 0.696529C8.91721 0.687444 8.9074 0.615289 8.96097 0.593374C11.275 -0.350537 13.7152 0.0358989 15.4936 1.51804C15.557 1.57096 15.5403 1.66663 15.4648 1.70351C15.1446 1.86012 14.7887 2.08781 14.6298 2.19311C14.5808 2.22571 14.5134 2.21983 14.4702 2.18135C13.3305 1.16849 11.2226 1.03059 9.97113 0.853669V0.854203Z"
                  fill="white"
                />
                <path
                  d="M32.7276 0.854203L33.7239 0.696529C33.7821 0.687444 33.7919 0.615289 33.7383 0.593374C31.4237 -0.350537 28.9835 0.0358989 27.2051 1.51804C27.1417 1.57096 27.1584 1.66663 27.2339 1.70351C27.5541 1.86012 27.91 2.08781 28.069 2.19311C28.1179 2.22571 28.1853 2.21983 28.2285 2.18135C29.3682 1.16849 31.4761 1.03059 32.7276 0.853669V0.854203Z"
                  fill="white"
                />
                <path
                  d="M21.4078 1.66815C19.8079 1.66815 18.9129 1.2908 17.3384 1.26888C17.2853 1.26835 17.2589 1.20902 17.298 1.17588C18.4211 0.222348 20.5854 0 21.3375 0C21.9693 0 24.0651 0.175848 25.2849 1.16947C25.3264 1.20314 25.2987 1.26461 25.2434 1.26354C23.6648 1.24002 23.6533 1.66761 21.4072 1.66761L21.4078 1.66815Z"
                  fill="white"
                />
                <path
                  d="M1.5703 9.45722H0.596414C0.42594 9.45722 0.308452 9.29686 0.366621 9.14827C0.473742 8.87357 0.613115 8.48125 0.631542 8.25461C0.648822 8.03814 0.641333 7.8591 0.633847 7.69659C0.619451 7.36897 0.607931 7.10865 0.814112 6.7452C0.983432 6.44698 1.17003 6.20803 1.36066 5.96487C1.59967 5.65964 1.84386 5.34753 2.06558 4.90174C2.23433 4.56181 2.34376 4.07809 2.46067 3.56018C2.56836 3.08288 2.68239 2.57671 2.85575 2.12827C3.21743 1.19398 3.34586 0.861531 4.22991 0.722562C5.09377 0.5868 6.08091 0.848702 7.08241 1.11541C7.65661 1.26828 8.236 1.42221 8.79982 1.50292C9.15517 1.55369 9.51569 1.59806 9.87333 1.64189C11.3748 1.82629 12.8387 2.00587 13.7573 2.6633C13.8662 2.74134 13.8662 2.88939 13.7838 2.99201C13.44 3.42067 13.1532 4.185 13.0985 5.1038C13.0588 5.76389 13.2269 6.58593 13.5362 7.60201C13.7147 8.18834 13.398 8.82223 13.1878 9.24341C13.1739 9.2707 13.1613 9.29686 13.1486 9.32199C13.1083 9.40378 13.0208 9.45775 12.9234 9.45775H5.42955C5.29706 9.45775 5.18994 9.35779 5.18362 9.23487C5.13065 8.18299 4.69583 7.08516 3.57506 7.08516C2.45433 7.08516 1.95213 8.39518 1.81564 9.25625C1.79778 9.37062 1.69469 9.45827 1.5703 9.45827V9.45722ZM3.46507 5.79543C3.00952 5.34004 3.22088 4.92473 3.45816 4.45918C3.53878 4.301 3.62288 4.13691 3.68391 3.96318C3.75072 3.77399 3.8043 3.57569 3.85727 3.38058C4.06519 2.61252 4.26157 1.88668 5.21934 1.88668C5.21934 1.88668 5.87934 1.9396 6.25942 2.14965C7.21833 2.67934 7.15441 4.65376 6.19953 5.59178C5.38173 6.39512 3.8763 6.20645 3.46507 5.79487V5.79543ZM8.28898 6.86387C9.20641 7.48549 10.6819 7.32193 11.3252 6.84087C12.1713 6.20803 12.3596 4.08877 11.642 3.47038C10.868 2.80387 10.0265 2.73011 9.11772 3.13419C8.09031 3.59119 7.64913 6.43094 8.28841 6.86387H8.28898Z"
                  fill="white"
                />
                <path
                  d="M41.1284 9.45722H42.1018C42.2723 9.45722 42.3898 9.29686 42.3316 9.14827C42.2243 8.87357 42.0849 8.48125 42.0665 8.25461C42.0492 8.03814 42.0566 7.8591 42.0644 7.69659C42.0785 7.36897 42.0901 7.10865 41.884 6.7452C41.7146 6.44698 41.5279 6.20803 41.3373 5.96487C41.0984 5.65964 40.8541 5.34753 40.6325 4.90174C40.4638 4.56181 40.3544 4.07809 40.2376 3.56018C40.1299 3.08288 40.0156 2.57671 39.8423 2.12827C39.4805 1.19398 39.3524 0.861531 38.4683 0.722562C37.6043 0.5868 36.6171 0.848702 35.6158 1.11541C35.0415 1.26828 34.4621 1.42221 33.8983 1.50292C33.5429 1.55369 33.1824 1.59806 32.8248 1.64189C31.3233 1.82629 29.8594 2.00587 28.9408 2.6633C28.8319 2.74134 28.8319 2.88939 28.9143 2.99201C29.2581 3.42067 29.5449 4.185 29.5996 5.1038C29.6393 5.76389 29.4712 6.58593 29.1619 7.60201C29.0001 8.1338 29.2449 8.70413 29.4493 9.1194C29.5501 9.32414 29.773 9.45775 30.0154 9.45775H37.269C37.402 9.45775 37.5086 9.35779 37.515 9.23487C37.5679 8.18299 38.0027 7.08516 39.1237 7.08516C40.2443 7.08516 40.7472 8.39518 40.8831 9.25625C40.9007 9.37062 41.0041 9.45827 41.1284 9.45827V9.45722ZM39.2342 5.79543C39.6898 5.34004 39.4784 4.92473 39.2412 4.45918C39.1604 4.301 39.0771 4.13691 39.0153 3.96318C38.9486 3.77399 38.895 3.57569 38.842 3.38058C38.6342 2.61252 38.4376 1.88668 37.48 1.88668C37.48 1.88668 36.82 1.9396 36.4399 2.14965C35.481 2.67934 35.5449 4.65376 36.4996 5.59178C37.3177 6.39512 38.823 6.20645 39.2342 5.79487V5.79543ZM34.4103 6.86387C33.4928 7.48549 32.0173 7.32193 31.374 6.84087C30.528 6.20803 30.3397 4.08877 31.0572 3.47038C31.8313 2.80387 32.6727 2.73011 33.5815 3.13419C34.609 3.59119 35.0501 6.43094 34.4109 6.86387H34.4103Z"
                  fill="white"
                />
                <path
                  d="M18.9366 9.45715H14.1594C14.066 9.45715 14.0084 9.36309 14.0516 9.28666C14.6063 8.31069 14.407 7.62279 14.1841 6.85472C14.0194 6.28654 13.8414 5.67455 13.9485 4.87016C14.2348 3.32067 15.0083 2.54458 16.569 2.17204C17.3787 1.97855 18.3422 2.12714 19.3409 2.28107C20.0326 2.38744 20.7404 2.49647 21.4263 2.49647C21.9377 2.49647 22.5557 2.40561 23.2007 2.311C24.2149 2.16188 25.2959 2.00367 26.1327 2.17204C27.743 2.49647 28.6046 3.3816 28.6933 4.78785C28.752 5.72426 28.5861 6.38597 28.4445 6.94986C28.2423 7.75425 28.0909 8.35984 28.7134 9.27864C28.7653 9.35508 28.7082 9.45771 28.6109 9.45771H23.7173C23.6079 9.45771 23.5123 9.39034 23.4766 9.29414C23.3015 8.82539 22.6876 7.50841 21.3272 7.50841C19.9669 7.50841 19.353 8.82539 19.1773 9.29414C19.1416 9.38981 19.0454 9.45771 18.9366 9.45771V9.45715ZM18.238 7.26254C17.2814 7.78473 16.0374 7.77672 15.5548 6.74516C15.0071 5.573 15.5393 3.9161 17.0816 3.50614C18.697 3.07693 20.2601 3.28645 20.2013 4.41691C20.1576 5.25713 19.3565 6.65213 18.238 7.26201V7.26254ZM27.1757 6.74516C26.6937 7.77672 25.4491 7.78421 24.4925 7.26254C23.3741 6.65213 22.573 5.25713 22.5292 4.41744C22.4705 3.28699 24.0335 3.07747 25.649 3.50666C27.1907 3.91663 27.7234 5.57353 27.1757 6.74569V6.74516Z"
                  fill="white"
                />
              </svg>
            </a>
          
          </div>
<div className={css.burgerMenuBox}>
          <div className={css.burgerMenu}>
            <BurgerMenu
              isCloseMenu={isCloseMenu}
              handleCloseMenu={onCloseMenu}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
          </div>
          {/* RIGHT SIDE */}

          <SocialNetworks isCloseMenu={isCloseMenu} isTopOfPage={isTopOfPage} />
        </div>
        </div>

      {/* MOBILE MENU MODAL */}
      {/*  */}
      {isMenuToggled && (
        <div id="navbar" className={css.mobileWrapper}>

          <div className={css.mobileBox}>
            <div className={css.topPart} onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <svg
                className={`${css.logoIcon} ${css.isTopPage}`}
                width="48"
                height="32"
                viewBox="0 0 48 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.351562 23.3809H3.49954C5.36093 23.3809 6.52369 24.2093 6.51162 25.4771C6.50643 26.0228 6.51162 26.7038 5.80553 27.327C6.29449 27.327 6.85542 27.9908 6.85542 29.3073C6.85542 30.9813 5.87753 31.8777 4.34096 31.8777H0.351562V23.3809ZM2.28262 25.2013V26.7439H3.80707C4.37093 26.7439 4.50568 26.2676 4.50568 26.0196V25.9608C4.50568 25.4771 4.31562 25.2249 3.80707 25.2249L2.28262 25.2013ZM2.28262 28.35V30.1753H4.07029C4.4976 30.1753 4.65886 29.7381 4.65886 29.3522V29.2255C4.65886 28.6429 4.38187 28.3612 3.87102 28.3612L2.28262 28.3495V28.35Z"
                  fill="white"
                />
                <path
                  d="M9.07654 28.1029L6.1543 23.3828H8.69526L10.1057 26.1515L11.6561 23.3828H13.9684L11.1349 28.1029V31.8791H9.07654V28.1029Z"
                  fill="white"
                />
                <path
                  d="M28.968 26.1279C28.968 27.8436 27.6007 29.2242 24.618 29.2242V31.8758H22.5332V23.3945H25.699C28.145 23.3945 28.968 24.4122 28.968 26.1279ZM24.618 27.6394H25.3454C26.2836 27.6394 27.0196 27.1151 27.0196 26.1279C27.0196 25.1407 26.4212 24.8713 25.3454 24.8713H24.618V27.64V27.6394Z"
                  fill="white"
                />
                <path
                  d="M0.351562 22.2368V11.1172H3.2997L6.67863 17.0666L10.2419 11.1172H13.19V22.2368H10.2419V17.1564L6.67863 22.2368L3.2997 17.1564V22.2368H0.351562Z"
                  fill="white"
                />
                <path
                  d="M16.8164 11.1172H20.8289L23.7563 22.2368H21.1508L20.4655 20.1688H17.0877L16.4536 22.2368H13.7969L16.817 11.1172H16.8164ZM18.8229 14.0516L17.4955 18.1233H20.0525L18.8229 14.0516Z"
                  fill="white"
                />
                <path
                  d="M34.082 11.1177H42.3477V13.6309H36.7141V15.3808H42.3477V17.8304H36.7141V19.9144H42.3477V22.2368H34.082V11.1172V11.1177Z"
                  fill="white"
                />
                <path
                  d="M29.4277 23.3945H35.7323V25.3117H31.4354V26.6464H35.7323V28.515H31.4354V30.1045H35.7323V31.8758H29.4277V23.3945Z"
                  fill="white"
                />
                <path
                  d="M16.7783 23.3945H19.8387L22.0716 31.8758H20.0846L19.5617 30.2985H16.985L16.5013 31.8758H14.4746L16.7783 23.3945ZM18.3091 25.633L17.2966 28.7384H19.2473L18.3091 25.633Z"
                  fill="white"
                />
                <path
                  d="M28.0803 22.2524L24.3281 22.2422V11.1226L28.0803 11.0879C31.5957 11.0879 33.4732 12.7213 33.4732 16.754C33.4732 19.8477 31.6711 22.2524 28.0803 22.2524ZM26.9112 19.8477H28.0803C29.7211 19.8477 30.722 18.846 30.722 16.754C30.722 14.662 29.9411 13.6866 28.0803 13.6866H26.9112V19.8477Z"
                  fill="white"
                />
                <path
                  d="M36.4822 25.7513C36.4822 24.4284 37.4701 23.4674 39.0682 23.3364C40.402 23.2269 41.6172 23.6903 42.539 24.2772L41.6966 26.0741C41.6966 26.0741 40.7539 25.5503 40.1997 25.3825C39.7649 25.2504 39.1868 25.375 39.0682 25.6577C38.9496 25.9405 38.9715 26.2296 39.3555 26.4146C39.3862 26.4295 39.4204 26.4456 39.4579 26.4637C39.67 26.5642 39.9901 26.7166 40.3529 26.9282H40.3589C40.3589 26.9282 41.1386 27.3307 41.7474 27.9774C41.7968 28.0266 41.8459 28.0774 41.8935 28.1287H41.8833C42.2097 28.5151 42.4579 28.9748 42.4579 29.4799C42.4579 30.8022 41.3193 31.8546 39.7212 31.9856C38.3874 32.0951 37.1683 31.5115 36.2461 30.9246L36.8976 29.125C36.8976 29.125 38.1866 29.6803 38.74 29.8487C39.1748 29.9807 39.7529 29.8562 39.8715 29.5734C39.9901 29.2907 40.0053 29.0892 39.5842 28.8166C39.4529 28.7316 39.2955 28.6434 39.1176 28.544C38.9846 28.4697 38.8402 28.389 38.687 28.2981C38.5204 28.2142 36.4804 27.1591 36.4804 25.7513H36.4822Z"
                  fill="white"
                />
                <path
                  d="M45.8574 12.942V11.0879H46.3205L46.8982 12.0799L47.4499 11.0879H47.9987V12.942H47.5357V12.027L46.8982 12.942L46.3494 12.027V12.942H45.8574Z"
                  fill="white"
                />
                <path
                  d="M43.9277 11.4781V11.0879H45.6833V11.4781H45.0434V12.942H44.5736V11.4781H43.9277Z"
                  fill="white"
                />
                <path
                  d="M9.97113 0.854203L8.97537 0.696529C8.91721 0.687444 8.9074 0.615289 8.96097 0.593374C11.275 -0.350537 13.7152 0.0358989 15.4936 1.51804C15.557 1.57096 15.5403 1.66663 15.4648 1.70351C15.1446 1.86012 14.7887 2.08781 14.6298 2.19311C14.5808 2.22571 14.5134 2.21983 14.4702 2.18135C13.3305 1.16849 11.2226 1.03059 9.97113 0.853669V0.854203Z"
                  fill="white"
                />
                <path
                  d="M32.7276 0.854203L33.7239 0.696529C33.7821 0.687444 33.7919 0.615289 33.7383 0.593374C31.4237 -0.350537 28.9835 0.0358989 27.2051 1.51804C27.1417 1.57096 27.1584 1.66663 27.2339 1.70351C27.5541 1.86012 27.91 2.08781 28.069 2.19311C28.1179 2.22571 28.1853 2.21983 28.2285 2.18135C29.3682 1.16849 31.4761 1.03059 32.7276 0.853669V0.854203Z"
                  fill="white"
                />
                <path
                  d="M21.4078 1.66815C19.8079 1.66815 18.9129 1.2908 17.3384 1.26888C17.2853 1.26835 17.2589 1.20902 17.298 1.17588C18.4211 0.222348 20.5854 0 21.3375 0C21.9693 0 24.0651 0.175848 25.2849 1.16947C25.3264 1.20314 25.2987 1.26461 25.2434 1.26354C23.6648 1.24002 23.6533 1.66761 21.4072 1.66761L21.4078 1.66815Z"
                  fill="white"
                />
                <path
                  d="M1.5703 9.45722H0.596414C0.42594 9.45722 0.308452 9.29686 0.366621 9.14827C0.473742 8.87357 0.613115 8.48125 0.631542 8.25461C0.648822 8.03814 0.641333 7.8591 0.633847 7.69659C0.619451 7.36897 0.607931 7.10865 0.814112 6.7452C0.983432 6.44698 1.17003 6.20803 1.36066 5.96487C1.59967 5.65964 1.84386 5.34753 2.06558 4.90174C2.23433 4.56181 2.34376 4.07809 2.46067 3.56018C2.56836 3.08288 2.68239 2.57671 2.85575 2.12827C3.21743 1.19398 3.34586 0.861531 4.22991 0.722562C5.09377 0.5868 6.08091 0.848702 7.08241 1.11541C7.65661 1.26828 8.236 1.42221 8.79982 1.50292C9.15517 1.55369 9.51569 1.59806 9.87333 1.64189C11.3748 1.82629 12.8387 2.00587 13.7573 2.6633C13.8662 2.74134 13.8662 2.88939 13.7838 2.99201C13.44 3.42067 13.1532 4.185 13.0985 5.1038C13.0588 5.76389 13.2269 6.58593 13.5362 7.60201C13.7147 8.18834 13.398 8.82223 13.1878 9.24341C13.1739 9.2707 13.1613 9.29686 13.1486 9.32199C13.1083 9.40378 13.0208 9.45775 12.9234 9.45775H5.42955C5.29706 9.45775 5.18994 9.35779 5.18362 9.23487C5.13065 8.18299 4.69583 7.08516 3.57506 7.08516C2.45433 7.08516 1.95213 8.39518 1.81564 9.25625C1.79778 9.37062 1.69469 9.45827 1.5703 9.45827V9.45722ZM3.46507 5.79543C3.00952 5.34004 3.22088 4.92473 3.45816 4.45918C3.53878 4.301 3.62288 4.13691 3.68391 3.96318C3.75072 3.77399 3.8043 3.57569 3.85727 3.38058C4.06519 2.61252 4.26157 1.88668 5.21934 1.88668C5.21934 1.88668 5.87934 1.9396 6.25942 2.14965C7.21833 2.67934 7.15441 4.65376 6.19953 5.59178C5.38173 6.39512 3.8763 6.20645 3.46507 5.79487V5.79543ZM8.28898 6.86387C9.20641 7.48549 10.6819 7.32193 11.3252 6.84087C12.1713 6.20803 12.3596 4.08877 11.642 3.47038C10.868 2.80387 10.0265 2.73011 9.11772 3.13419C8.09031 3.59119 7.64913 6.43094 8.28841 6.86387H8.28898Z"
                  fill="white"
                />
                <path
                  d="M41.1284 9.45722H42.1018C42.2723 9.45722 42.3898 9.29686 42.3316 9.14827C42.2243 8.87357 42.0849 8.48125 42.0665 8.25461C42.0492 8.03814 42.0566 7.8591 42.0644 7.69659C42.0785 7.36897 42.0901 7.10865 41.884 6.7452C41.7146 6.44698 41.5279 6.20803 41.3373 5.96487C41.0984 5.65964 40.8541 5.34753 40.6325 4.90174C40.4638 4.56181 40.3544 4.07809 40.2376 3.56018C40.1299 3.08288 40.0156 2.57671 39.8423 2.12827C39.4805 1.19398 39.3524 0.861531 38.4683 0.722562C37.6043 0.5868 36.6171 0.848702 35.6158 1.11541C35.0415 1.26828 34.4621 1.42221 33.8983 1.50292C33.5429 1.55369 33.1824 1.59806 32.8248 1.64189C31.3233 1.82629 29.8594 2.00587 28.9408 2.6633C28.8319 2.74134 28.8319 2.88939 28.9143 2.99201C29.2581 3.42067 29.5449 4.185 29.5996 5.1038C29.6393 5.76389 29.4712 6.58593 29.1619 7.60201C29.0001 8.1338 29.2449 8.70413 29.4493 9.1194C29.5501 9.32414 29.773 9.45775 30.0154 9.45775H37.269C37.402 9.45775 37.5086 9.35779 37.515 9.23487C37.5679 8.18299 38.0027 7.08516 39.1237 7.08516C40.2443 7.08516 40.7472 8.39518 40.8831 9.25625C40.9007 9.37062 41.0041 9.45827 41.1284 9.45827V9.45722ZM39.2342 5.79543C39.6898 5.34004 39.4784 4.92473 39.2412 4.45918C39.1604 4.301 39.0771 4.13691 39.0153 3.96318C38.9486 3.77399 38.895 3.57569 38.842 3.38058C38.6342 2.61252 38.4376 1.88668 37.48 1.88668C37.48 1.88668 36.82 1.9396 36.4399 2.14965C35.481 2.67934 35.5449 4.65376 36.4996 5.59178C37.3177 6.39512 38.823 6.20645 39.2342 5.79487V5.79543ZM34.4103 6.86387C33.4928 7.48549 32.0173 7.32193 31.374 6.84087C30.528 6.20803 30.3397 4.08877 31.0572 3.47038C31.8313 2.80387 32.6727 2.73011 33.5815 3.13419C34.609 3.59119 35.0501 6.43094 34.4109 6.86387H34.4103Z"
                  fill="white"
                />
                <path
                  d="M18.9366 9.45715H14.1594C14.066 9.45715 14.0084 9.36309 14.0516 9.28666C14.6063 8.31069 14.407 7.62279 14.1841 6.85472C14.0194 6.28654 13.8414 5.67455 13.9485 4.87016C14.2348 3.32067 15.0083 2.54458 16.569 2.17204C17.3787 1.97855 18.3422 2.12714 19.3409 2.28107C20.0326 2.38744 20.7404 2.49647 21.4263 2.49647C21.9377 2.49647 22.5557 2.40561 23.2007 2.311C24.2149 2.16188 25.2959 2.00367 26.1327 2.17204C27.743 2.49647 28.6046 3.3816 28.6933 4.78785C28.752 5.72426 28.5861 6.38597 28.4445 6.94986C28.2423 7.75425 28.0909 8.35984 28.7134 9.27864C28.7653 9.35508 28.7082 9.45771 28.6109 9.45771H23.7173C23.6079 9.45771 23.5123 9.39034 23.4766 9.29414C23.3015 8.82539 22.6876 7.50841 21.3272 7.50841C19.9669 7.50841 19.353 8.82539 19.1773 9.29414C19.1416 9.38981 19.0454 9.45771 18.9366 9.45771V9.45715ZM18.238 7.26254C17.2814 7.78473 16.0374 7.77672 15.5548 6.74516C15.0071 5.573 15.5393 3.9161 17.0816 3.50614C18.697 3.07693 20.2601 3.28645 20.2013 4.41691C20.1576 5.25713 19.3565 6.65213 18.238 7.26201V7.26254ZM27.1757 6.74516C26.6937 7.77672 25.4491 7.78421 24.4925 7.26254C23.3741 6.65213 22.573 5.25713 22.5292 4.41744C22.4705 3.28699 24.0335 3.07747 25.649 3.50666C27.1907 3.91663 27.7234 5.57353 27.1757 6.74569V6.74516Z"
                  fill="white"
                />
              </svg>
              <div>
                <div>
                  <button
                    className={css.navBtn}
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    CLOSE
                  </button>
                </div>
                <SocialNetworks isCloseMenu={isCloseMenu} isTopOfPage={isTopOfPage}/>
              </div>
            </div>
          </div>

          {/* MENU ITEMS */}


          <div className={css.mainPart}>
            <div className={css.linkWrapper}>
              <Link
                page="Hero"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="M-map"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="FAQ"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Arts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Mint"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>
            <div className={css.footer}>
              <p className={css.textFooter}>© Yacht ape 2024 all rights reserved</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
