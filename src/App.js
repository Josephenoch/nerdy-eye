import { Hero } from "./Components/Hero/Hero";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { Navbar } from "./Components/Layout/Navbar";
import { JobSection } from "./Components/Job/JobSection";
import { Industries } from "./Components/Industries/Industries";
import { JoinPipeline } from "./Components/JoinPipeline/JoinPipeline";
import { SuccessStories } from "./Components/SuccesSories/SuccessStories";
import { ContactUs } from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <div className="w-[screen] text-textTheme font-montserrat h-screen">
      {/* <div className='absolute w-1 h-1 p-[270px] mx-auto left-0 right-[110px] rounded-full border-2 border-gray-900 z-20 top-[-100px]'></div> */}
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
      <div className="flex justify-between mt-16 items-center flex-col w-full bg-[#f8f8f8]">
        <Industries/>
      </div>
      <div className="w-full mt-16 flex flex-col h-full items-center">
        <JoinPipeline/>
      </div>
      <div className="w-full mt-48 flex items-center flex-col">
        <SuccessStories/>
      </div>
      <div className="w-full h-[90%] flex">
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
