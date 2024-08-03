import React from "react";
import Banner from "../Components/UI/banner";
import { IoMdPlay } from "react-icons/io";
import Typewriter from "typewriter-effect";
import Services from "../Components/Pagecomponents/Home/Services";
import TestimonialsandFAQ from "../Components/Pagecomponents/Home/TestimonialsandFAQ";
import Blog from "../Components/Pagecomponents/Home/Blog";
import Aboutsection from "../Components/Pagecomponents/Home/About";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogdata = [
    {
      image: blog1,
      date: new Date().toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      title: "Far far away, behind the word mountains",
      description:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    },
    {
      image: blog2,
      date: new Date().toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      title: "Far far away, behind the word mountains",
      description:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    },
    {
      image: blog3,
      date: new Date().toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      title: "Far far away, behind the word mountains",
      description:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    },
    {
      image: blog4,
      date: new Date().toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      title: "Far far away, behind the word mountains",
      description:
        "Vokalia and Consonantia, there live the blind texts. Separated they live.",
    },
  ];
  return (
    <div className="grid gap-28">
      <Banner>
        <div className="h-full w-4/12 justify-center flex flex-col gap-10 text-white ">
          <div className="text-5xl font-bold capitalize leading-normal playflair">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("It is Better to Travel Well Than to Arrive ")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
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
            <div className="text-2xl  capitalize playflair"> watch now</div>
          </div>
        </div>
      </Banner>

      <Aboutsection />
      <Services />
      <TestimonialsandFAQ />
      <div className="flex flex-col gap-14 w-10/12 mx-auto">
        <div className=" flex flex-col gap-1 playflair">
          <div className="text-orange-500 font-semibold text-2xl ">BLOG</div>
          <div className="text-6xl font-bold ">Recent Posts</div>
        </div>
        <div>
          <Blog blogdata={blogdata} />
        </div>
      </div>
    </div>
  );
}

export default Home;
