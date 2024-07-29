import React, { useEffect } from "react";
import Banner from "../Components/UI/banner";
import Aboutsection from "../Components/Pagecomponents/Home/About";
import TestimonialsandFAQ from "../Components/Pagecomponents/Home/TestimonialsandFAQ";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="grid gap-36">
      <Banner>
        <div className="h-full w-full flex flex-col justify-center items-center gap-3 text-white ">
          <div className="capitalize text-5xl font-bold animatedslide playflair">about us</div>
          <div className="w-5/12 text-md text-center animatedslide">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
      {/* ABOUT SECTION */}
   <Aboutsection/>
   <TestimonialsandFAQ/>
    </div>
  );
}

export default About;
