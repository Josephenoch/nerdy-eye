import { Hero } from "./Components/Hero/Hero";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { Navbar } from "./Components/Layout/Navbar";
import { JobSection } from "./Components/Job/JobSection";
import { Industries } from "./Components/Industries/Industries";
import { JoinPipeline } from "./Components/JoinPipeline/JoinPipeline";
import { SuccessStories } from "./Components/SuccesSories/SuccessStories";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Footer } from "./Components/Footer/Footer"
import { useEffect, useState } from "react";


function App() {
  const [themeValue, setThemeValue] = useState(JSON.parse(window.localStorage.getItem("theme"))||false)
  const handleTheme = () => {
    setThemeValue(prevState => !prevState)
  }
  useEffect(()=>{
    window.localStorage.setItem("theme",themeValue)
  },[themeValue])
  return (
    <div className={`${themeValue?"dark":""} w-[screen] dark:text-white  lg:text-textTheme font-montserrat h-screen overflow-x-hidden`}>
      {/* <div className='absolute w-1 h-1 p-[270px] mx-auto left-0 right-[110px] rounded-full border-2 border-gray-900 z-20 top-[-100px]'></div> */}
      <Navbar/>
      <div className="w-full z-40 dark:bg-black dark:text-white lg:h-[100%] pb-10 lg:mb-0">
        <Hero handleTheme={handleTheme}/>
      </div>
      <div className="w-full flex flex-col items-center dark:bg-[#0e0e0e] dark:text-white justify-evenly lg:h-[60%] pb-16 lg:pb-0 bg-[#f5f5f5]">
        <HowItWorks/>
      </div>
      <div className="flex items-center dark:bg-black dark:text-white flex-col pb-12">
        <JobSection/>
      </div>
      <div className="flex justify-between pt-8 dark:bg-[#0e0e0e] dark:text-white items-center flex-col w-full bg-[#f8f8f8] pb-8">
        <Industries/>
      </div>
      <div className="w-full pt-8 flex flex-col h-full items-center dark:bg-black dark:text-white">
        <JoinPipeline/>
      </div>
      <div className="w-full pt-24 lg:pt-48 flex items-center flex-col  dark:bg-black dark:text-white">
        <SuccessStories/>
      </div>
      <div className="w-full h-[90%] flex mt-16 lg:mt-0 dark:bg-black dark:text-white">
        <ContactUs/>
      </div>
      <div className="w-full min-h-[80%] lg:min-h-fit pt-64 lg:pt-16 flex flex-col bg-[#f5f5f5] dark:bg-[#0e0e0e] dark:lg:bg-black   dark:text-white">
        <Footer/>
      </div>

    </div> 
  );
}

export default App;
