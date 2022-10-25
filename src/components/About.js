import "../styles/About.css";
import abtImg from "../images/background.jpg";

function About() {
   return (
      <>
         <div className="about">
            <div className="aboutImg">
               <img src={abtImg} alt="img" />
            </div>
            <div className="aboutText">
               <h3>ABOUT US</h3>
               <h1>We Provide Solutions For Clients</h1>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum a voluptates numquam officiis deleniti praesentium
                  voluptatum, debitis consequatur facere dicta ratione magnam
                  repellendus voluptatem voluptatibus illum cum molestiae eum
                  dignissimos. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nostrum a voluptates numquam officiis
                  deleniti praesentium voluptatum, debitis consequatur facere
               </p>
               <button className="aboutBtn">Learn More</button>
            </div>
         </div>
      </>
   );
}

export default About;
