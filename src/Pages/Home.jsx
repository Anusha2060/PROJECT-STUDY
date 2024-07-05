import React from "react";
import Banner from "../Components/UI/banner";
import { IoMdPlay } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import Services from "../Components/Pagecomponents/Home/Services";
import TestimonialsandFAQ from "../Components/Pagecomponents/Home/TestimonialsandFAQ";
import Blog from "../Components/Pagecomponents/Home/Blog";
import Aboutsection from "../Components/Pagecomponents/Home/About";

function Home() {
  return (
    <div className="grid gap-28" >
      <Banner>
        <div className="h-full w-4/12 justify-center flex flex-col gap-10 text-white ">
          <div className="text-5xl font-bold capitalize leading-normal">
            <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('It is Better to Travel Well Than to Arrive ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

          </div>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 p-1 rounded-full border border-white flex items-center justify-center ">
              <div className="h-12 w-12 text-2xl flex items-center justify-center rounded-full bg-white text-black">
                <IoMdPlay />
              </div>
            </div>
            <div className="text-2xl  capitalize"> watch now</div>
          </div>
        </div>
      </Banner>
      

      <Aboutsection/>
      <Services/>
      <TestimonialsandFAQ/>
      <Blog/>
    </div>
  );
}

export default Home;
