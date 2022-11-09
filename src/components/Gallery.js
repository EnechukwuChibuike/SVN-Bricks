import "../styles/Gallery.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/bg.jpg";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";

function Gallery() {
   return (
      <div className="gallery" id="Gallery">
         <h3>OUR GALLERY</h3>
         <h1>Our Complete Projects</h1>
         <div className="galleryPics">
            <Carousel
               infiniteLoop
               useKeyboardArrows
               autoPlay
               showThumbs={false}
            >
               <figure className="g_figure">
                  <img src={image1} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image2} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image3} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image4} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image5} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image6} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image7} alt="gallery" />
               </figure>
               <figure className="g_figure">
                  <img src={image8} alt="gallery" />
               </figure>
            </Carousel>
         </div>
      </div>
   );
}

export default Gallery;
