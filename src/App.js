import { Hero } from "./Components/Hero/Hero";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { Navbar } from "./Components/Layout/Navbar";
import { JobSection } from "./Components/Job/JobSection";
import { Industries } from "./Components/Industries/Industries";
import { JoinPipeline } from "./Components/JoinPipeline/JoinPipeline";
import { SuccessStories } from "./Components/SuccesSories/SuccessStories";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="w-[screen] text-black lg:text-textTheme font-montserrat h-screen overflow-x-hidden">
      {/* <div className='absolute w-1 h-1 p-[270px] mx-auto left-0 right-[110px] rounded-full border-2 border-gray-900 z-20 top-[-100px]'></div> */}
      <Navbar/>
      <div className="w-full z-10 relative lg:h-[100%] mb-10 lg:mb-0">
        <Hero/>
      </div>
      <div className="w-full flex flex-col items-center justify-evenly lg:h-[60%] pb-16 lg:pb-0 bg-[#f5f5f5]">
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
      <div className="w-full mt-24 lg:mt-48 flex items-center flex-col overflow-x-none">
        <SuccessStories/>
      </div>
      <div className="w-full h-[90%] flex mt-16 lg:mt-0">
        <ContactUs/>
      </div>
      <div className="w-full h-[80%] mt-64 lg:mt-16 flex flex-col bg-[#f5f5f5]">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
