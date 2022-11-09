import { useState } from "react";
import "../styles/nav.css";
import { MdDehaze } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
   const [colorChange, setColorchange] = useState(false);
   const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
         setColorchange(true);
      } else {
         setColorchange(false);
      }
   };
   window.addEventListener("scroll", changeNavbarColor);
   const [isNavExpanded, setIsNavExpanded] = useState(false);
   return (
      <>
         <header className={colorChange ? "navbar colorChange" : "navbar"}>
            <a href="/" className="logo">
               SVN
            </a>
            <nav className={isNavExpanded ? "nav menu" : "nav"}>
               <AnchorLink href="#Home">
                  <div>
                     <a href="/">Home</a>
                  </div>
               </AnchorLink>
               <AnchorLink href="#About">
                  <div>
                     <a href="/">About</a>
                  </div>
               </AnchorLink>
               <AnchorLink href="#Services">
                  <div>
                     <a href="/">Services</a>
                  </div>
               </AnchorLink>
               <AnchorLink href="#Projects">
                  <div>
                     <a href="/">Projects</a>
                  </div>
               </AnchorLink>
               <AnchorLink href="#Gallery">
                  <div>
                     <a href="/">Gallery</a>
                  </div>
               </AnchorLink>
               <AnchorLink href="#Contact">
                  <div>
                     <a href="/">Contact</a>
                  </div>
               </AnchorLink>
            </nav>
            <button
               className="menuIcon"
               onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
               }}
            >
               <MdDehaze />
               <p style={{ fontSize: "18px" }}>Menu</p>
            </button>
         </header>
      </>
   );
}

export default Header;
