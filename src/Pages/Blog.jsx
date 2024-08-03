import React, { useEffect, useState } from "react";
import Banner from "../Components/UI/banner";
import Blog from "../Components/Pagecomponents/Home/Blog";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [pagee, setpagee] = useState(0);
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
    {
      image: blog5,
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
      image: blog6,
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
      image: blog7,
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
      image: blog8,
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
  const pagination = [{}, {}, {}, {}, {}];
  return (
    <div className="grid gap-28">
      <Banner>
        <div className="h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div className="capitalize text-5xl font-bold playflair">Blogs</div>
          <div className="w-5/12 text-md text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
      <div className="w-10/12 mx-auto">
        <Blog blogdata={blogdata} />
      </div>
      <div className="flex items-center justify-center gap-3">
        {pagination.map((val, i) => {
          return (
            <div
              className={`h-10 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500 delay-75 text-lg font-semibold cursor-pointer w-10 rounded-full flex items-center justify-center ${
                pagee == i
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 bg-orange-100"
              }`}
              onClick={() => {
                setpagee(i);
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
