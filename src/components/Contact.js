import Map from "./Map.js";
import "../styles/Contact.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_2e6ajog";
const TEMPLATE_ID = "template_rgi92dw";
const USER_ID = "bOZHC71xqWARx_Ngd";

const Contact = () => {
   const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
         (result) => {
            console.log(result.text);
            Swal.fire({
               icon: "success",
               title: "Message Sent Successfully",
            });
         },
         (error) => {
            console.log(error.text);
            Swal.fire({
               icon: "error",
               title: "Ooops, something went wrong",
               text: error.text,
            });
         }
      );
      e.target.reset();
   };
   return (
      <>
         <div className="main" id="Contact">
            <div className="Contact">
               <form onSubmit={handleOnSubmit}>
                  {/* <div className="formHead"> */}
                  <h3>CONTACT US</h3>
                  <h1>Get In Touch</h1>
                  {/* </div> */}
                  <div className="inputDiv">
                     <input type="text" placeholder="Name*" />
                     <input type="email" placeholder="Email*" />
                  </div>
                  <textarea
                     id="w3review"
                     name="w3review"
                     rows="8"
                     cols="50"
                     placeholder="Message*"
                  ></textarea>
                  <button type="submit">Send Message</button>
               </form>
               <Map />
            </div>
         </div>
      </>
   );
};

export default Contact;
