import React from 'react'
import { Button } from '../GeneralComponents/Button'

export const HeroLeft = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mt-16 lg:mt-0">GET STARTED & LET YOUR JOB FIND <br className="hidden lg:block"/> YOU</h1>
        <p className="text-xs mt-4 font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolores dicta. Doloremque soluta quos, laudantium unde laborum ipsa nostrum itaque, nobis sapiente explicabo nam perferendis harum consequuntur inventore quidem aliquid?
        </p>
        <Button text="Join Talents Pipeline" addedClass="hidden lg:block"/>
        <Button text="For Talents" addedClass="lg:hidden"/>

        <div className="space-x-20 flex mt-10 w-full lg:w-fit justify-center">
            <div>
                <p className="text-3xl lg:text-5xl font-bold">120<span className="text-theme">+</span></p>
                <span className="mt-2 inline-block font-semibold text-sm">Recruiters</span>
            </div>
            <div>
                <p className="text-3xl lg:text-5xl font-bold">200<span className="text-theme">+</span></p>
                <span className="mt-2 inline-block font-semibold text-sm">Talents</span>
            </div>
            
        </div>
    </>
  )
}
