import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="w-[screen] font-montserrat h-screen">
      <Navbar/>
      <div className="w-full z-10 relative h-[80%]">
        <Hero/>
      </div>
    </div>
  );
}

export default App;
