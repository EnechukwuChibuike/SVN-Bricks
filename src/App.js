import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/partners";
import Services from "./components/Services";

function App() {
   return (
      <div className="App">
         {/* <Header /> */}
         <Home />
         <Partners />
         <About />
         <Services />
      </div>
   );
}

export default App;
