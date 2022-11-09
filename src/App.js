import "./App.css";
import Header from "./components/nav.js";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/partners";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="App">
         <Header />
         <Home />
         <Partners />
         <About />
         <Services />
         <Gallery />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
