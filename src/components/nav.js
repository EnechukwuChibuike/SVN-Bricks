import { useState } from "react";
import "../styles/nav.css";
import { MdDehaze } from "react-icons/md";

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
            <a href="../App.js" className="logo">
               SVN
            </a>
            <nav className={isNavExpanded ? "nav menu" : "nav"}>
               <div>
                  <a href="./Home.js">Home</a>
               </div>
               <div>
                  <a href="./About.js">About</a>
               </div>
               <div>
                  <a href="./Services.js">Services</a>
               </div>
               <div>
                  <a href="./Projects.js">Projects</a>
               </div>
               <div>
                  <a href="./Blog.js">Blog</a>
               </div>
               <div>
                  <a href="./Contact.js">Contact</a>
               </div>
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
