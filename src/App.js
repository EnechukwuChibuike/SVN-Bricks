import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/partners";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
   return (
      <div className="App">
         {/* <Header /> */}
         <Home />
         <Partners />
         <About />
         <Services />
         <Gallery />
         <Contact />
      </div>
   );
}

export default App;
