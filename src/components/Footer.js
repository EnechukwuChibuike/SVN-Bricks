import "../styles/Footer.css";
import { FaMapMarker } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaClock } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
   return (
      <>
         <div className="Footer">
            <div className="footmain">
               <div className="shopwithus">
                  <h2>Shop with us today!</h2>
                  <p>
                     loLorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nostrum a voluptates numquam officiis deleniti praesentium
                     voluptatum, debitis consequatur facere dicta ratione magnam
                     loLorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nostrum a voluptates numquam officiis deleniti praesentium
                     voluptatum, debitis consequatur facere dicta ratione magnam
                  </p>
               </div>
               <div className="navigator">
                  <h2>Navigate</h2>
                  <AnchorLink href="#Home" className="links">
                     <p>Home</p>
                  </AnchorLink>
                  <AnchorLink href="#About" className="links">
                     <p>About</p>
                  </AnchorLink>
                  <AnchorLink href="#Contact" className="links">
                     <p>Contact</p>
                  </AnchorLink>
                  <AnchorLink href="#Gallery" className="links">
                     <p>Gallery</p>
                  </AnchorLink>
                  <AnchorLink href="#Services" className="links">
                     <p>Services</p>
                  </AnchorLink>
               </div>
               <div className="contactus">
                  <h2>Contact Us</h2>
                  <div className="location">
                     <FaMapMarker
                        style={{ fontSize: "20px", marginTop: "3px" }}
                     />
                     <div>
                        <p>
                           Head Office: Block D2 291,HFP Eastline Shopping
                           Complex, Lekki Expressway Ajah Lagos.
                        </p>
                        <p>
                           Other office: KM5 Owerri Aba Road, Naze Owerri, Imo
                           State.
                        </p>
                     </div>
                  </div>
                  <div className="phone">
                     <FaPhoneAlt />
                     <p>Phone: +2348033166418</p>
                  </div>
                  <div className="phone">
                     <FaEnvelope />
                     <p>Email: svnbricksltd@gmail.com</p>
                  </div>
                  <div className="phone">
                     <FaClock />
                     <p>Working Hours: 9am - 5pm</p>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="horline"></div>
               <p>Copyright &copy; SVN Bricks All rights reserved.</p>
            </div>
         </div>
      </>
   );
}

export default Footer;
