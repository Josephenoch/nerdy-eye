import React from 'react'

export const Hero = () => {
  return (

    <div className="w-full flex justify-around items-center bg-white h-[100%]">
        <div className="w-[45%] bg-white">
            <h1 className="text-2xl font-bold">GET STARTED AND LET YOUR JOB FIND <br/> YOU</h1>
            <p className="text-xs mt-4 font-medium text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolores dicta. Doloremque soluta quos, laudantium unde laborum ipsa nostrum itaque, nobis sapiente explicabo nam perferendis harum consequuntur inventore quidem aliquid?
            </p>
            <button className="bg-theme mt-6 text-white text-xs p-4 rounded-md shadow-sm font-medium">
                Join Talents Pipeline
            </button>
            <div className="space-x-20 flex mt-10">
                <div>
                    <p className="text-5xl font-bold">120<span className="text-theme">+</span></p>
                    <span className="mt-2 inline-block font-semibold text-sm">Recruiters</span>
                </div>
                <div>
                    <p className="text-5xl font-bold">200<span className="text-theme">+</span></p>
                    <span className="mt-2 inline-block font-semibold text-sm">Talents</span>
                </div>
                
            </div>
        </div>
        <div className="w-[35%] bg-white">
            
        </div>
    </div>

  )
}
