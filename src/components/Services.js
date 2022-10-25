import "../styles/Services.css";
import americanbricks from "../images/americanbricks.jpg";
import SAbricks from "../images/southAfricanBricks.jpg";
import wheelBarrow from "../images/s-l500.jpg";

function Services() {
   return (
      <>
         <div className="Services">
            <h3>WHAT WE SELL?</h3>
            <h1>Our Products</h1>
            <section className="products">
               <figure className="p_figure">
                  <img src={americanbricks} alt="americanbricks" />
                  <figcaption>American Bricks</figcaption>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nostrum a voluptates numquam officiis deleniti praesentium
                     voluptatum, debitis consequatur facere dicta ratione magnam
                  </p>
               </figure>
               <figure className="p_figure">
                  <img src={SAbricks} alt="americanbricks" />
                  <figcaption>South African Bricks</figcaption>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nostrum a voluptates numquam officiis deleniti praesentium
                     voluptatum, debitis consequatur facere dicta ratione magnam
                  </p>
               </figure>

               <figure className="p_figure">
                  <img src={wheelBarrow} alt="americanbricks" />
                  <figcaption>Wheelbarrow Pan</figcaption>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nostrum a voluptates numquam officiis deleniti praesentium
                     voluptatum, debitis consequatur facere dicta ratione magnam
                  </p>
               </figure>
            </section>
         </div>
      </>
   );
}

export default Services;
