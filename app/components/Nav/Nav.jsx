"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import contactUs from "@/app/utils/whatsapp";
import c from "./Nav.module.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMenuClick() {
    console.log("Menu clicked");
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={c.cont}>
      <div className={c.wrapper}>
        <motion.div
          className={`${isMenuOpen ? (isSmallScreen ? c.menuSmall : c.menu) : ""}`}
          initial={{ left: "-100%", opacity: "0", opacity: 0 }}
          animate={{ left: isMenuOpen ? "0px" : "-100vw", opacity: isMenuOpen ? 1 : 0 }}
          exit={{ left: isSmallScreen ? "-100vw" : "-350px", opacity: "0px" }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            width: isSmallScreen ? "100vw" : "350px",
            backgroundColor: "white",
            height: "100vh",
            zIndex: 100,
          }}>
          <div className={c.closeIcon} onClick={handleMenuClick}>
            <IoCloseSharp size={40} />
          </div>
          {isMenuOpen && (
            <>
              <ul className={c.ul}>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#gobags">O que é Go Bags</a></li>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#process">Nosso Processo</a></li>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#videos">Videos</a></li>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#marcas">Nossas Marcas</a></li>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#privatelabel">Private Label</a></li>
                <li className={c.menuItems}><a onClick={() => setIsMenuOpen(false)} href="#contato">Contato</a></li>
              </ul>
            </>
          )}
        </motion.div>

        <div className={c.innerCont}>
          <motion.div className={`${c.menuIcon}`} onClick={handleMenuClick}>
            <RxHamburgerMenu size={25} />
          </motion.div>
          <div className={c.logoCont}>
            <img
              src="https://static.wixstatic.com/media/113b92_dc729e38bd27493c9343fc4e4341bed4~mv2.png/v1/fill/w_88,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GO_BAGS_SITELOGO.png"
              alt="company logo"
              className={c.logo}
            />
          </div>

          <div>
            <div className={c.icons}>
              <FaWhatsapp onClick={contactUs} className={c.iconsItem} size={25} />
              <a href="https://www.instagram.com/gobags.br/" target="_blank"><FaInstagram className={c.iconsItem} size={25} /></a>
              <FaShoppingCart className={c.iconsItem} size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// animation that I want!!
// animate={{height: '100vh', width: '400px', borderRadius: '0', left: '0', top: '0', position: 'absolute',  }}
// transition={{duration: 1}}
