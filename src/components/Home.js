import "../styles/Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
   return (
      <>
         <div className="home" id="Home">
            <p className="welcome">Welcome to SVN Bricks</p>
            <p className="intro">Building Zero Emission</p>
            <p className="intro">With SVN Bricks</p>
            <AnchorLink href="#Contact">
               <button className="contactBtn">Contact Now</button>
            </AnchorLink>
         </div>
      </>
   );
}

export default Home;
