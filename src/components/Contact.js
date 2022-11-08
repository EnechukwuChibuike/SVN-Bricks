import Map from "./Map.js";
import "../styles/Contact.css";
function Contact() {
   return (
      <>
         <div className="main">
            <div className="Contact">
               <form>
                  <div className="formHead">
                     <h3>CONTACT US</h3>
                     <h1>Get In Touch</h1>
                  </div>
                  <div className="inputDiv">
                     <input type="text" placeholder="Name*" />
                     <input type="text" placeholder="Email*" />
                  </div>
                  <textarea id="w3review" name="w3review" rows="8" cols="50">
                     Message*
                  </textarea>
                  <button>Send Message</button>
               </form>
               <Map />
            </div>
         </div>
      </>
   );
}

export default Contact;
