import { Hero } from "./Components/Hero/Hero";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { Navbar } from "./Components/Layout/Navbar";
import { JobSection } from "./Components/Job/JobSection";

function App() {
  return (
    <div className="w-[screen] text-textTheme font-montserrat h-screen">
      <Navbar/>
      
      <div className="w-full z-10 relative h-[90%] ">
        <Hero/>
      </div>
      <div className="w-full flex flex-col items-center justify-evenly h-[60%] bg-[#f5f5f5]">
        <HowItWorks/>
      </div>
      <div className="flex items-center flex-col">
        <JobSection/>
      </div>
    </div>
  );
}

export default App;
