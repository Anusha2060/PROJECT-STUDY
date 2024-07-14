import React from "react";
import blogone from "../../../assets/n2.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const Servicedata = [
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
    {
      image: blogone,
      title: "kisan mahat",
      description:
        "kisan loves me idk whyyyyy and the shockin thing is I also love him xoxo.",
    },
  ];

  return (
    <div className="w-10/12 mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-5 gap-6 ">
        <div className="w-10/12 col-span-3 flex flex-col gap-4">
          <div className="text-orange-500 font-bold text-2xl animatedslide">
            What we serve
          </div>
          <div className="font-bold text-5xl leading-[54px] animatedslide">
            We Provide Top Destinations{" "}
          </div>
          <div className="text-gray-700 w-10/12 text-md animatedslide">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </div>
        </div>
        <div className="text-6xl flex col-span-2 gap-3 justify-end text-gray-800 items-center animatedslide">
          <div>
            <GoArrowLeft />{" "}
          </div>
          <div>
            <GoArrowRight />{" "}
          </div>
        </div>
      </div>
      <div className="grid animatedslide">
        <Carousel 
        autoPlay={true}
        draggable={true}
        infinite={true}
        autoPlaySpeed={3000}
          responsive={responsive}
        >
          {Servicedata.map((val, i) => {
            return (
              <div className={`flex flex-col mx-2 gap-6 `}>
                <div className="h-[500px] w-full relative">
                  <div className="h-16 w-16 z-10 flex justify-center items-center text-xl font-medium shadow-md bg-white text-orange-500 absolute bottom-0 right-0 ">
                    $ 490
                  </div>
                  <img
                    className="h-full w-full object-cover"
                    src={val.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-4xl font-semibold w-10/12">
                    {val.title}
                  </div>
                  <div className="text-gray-500">{val.description}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
