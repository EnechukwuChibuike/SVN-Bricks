import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/partners";

function App() {
   return (
      <div className="App">
         {/* <Header /> */}
         <Home />
         <Partners />
         <About />
      </div>
   );
}

export default App;
