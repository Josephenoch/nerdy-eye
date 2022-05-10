import { Hero } from "./Components/Hero/Hero";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { Navbar } from "./Components/Layout/Navbar";

function App() {
  return (
    <div className="w-[screen] text-textTheme font-montserrat h-screen">
      <Navbar/>
      
      <div className="w-full z-10 relative h-[90%] ">
        <Hero/>
      </div>
      <div className="w-full flex flex-col items-center justify-evenly h-[60%] bg-gray-200">
        <HowItWorks/>
      </div>
    </div>
  );
}

export default App;
