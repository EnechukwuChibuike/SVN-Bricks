import Header from "./nav.js";
import "../styles/Home.css";

function Home() {
   return (
      <>
         <Header />
         <div className="home">
            <p className="welcome">Welcome to SVN Bricks</p>
            <p className="intro">Building Zero Emission</p>
            <p className="intro">With SVN Bricks</p>
            <button className="contactBtn">Contact Now</button>
         </div>
      </>
   );
}

export default Home;
