import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/partners";
import Services from "./components/Services";
import Gallery from "./components/Gallery";

function App() {
   return (
      <div className="App">
         {/* <Header /> */}
         <Home />
         <Partners />
         <About />
         <Services />
         <Gallery />
      </div>
   );
}

export default App;
