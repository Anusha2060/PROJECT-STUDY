import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import man from "../../../assets/about.jpeg";
import manone from "../../../assets/about1.jpeg";
import mantwo from "../../../assets/n2.jpg";

function TestimonialsandFAQ() {
  const [show, setshow] = useState(0);
  const [test, settest] = useState(0);
  const faquestions = [
    {
      title: "how to download and register?",
      Ans: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      title: "how to create your paypal account?",
      Ans: " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      title: "how to link your paypal and bank account?",
      Ans: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
    },
    {
      title: "We are better than others",
      Ans: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
    },
  ];
  const Testimonialsdata = [
    {
      name: "Anusha Gharti Chhetri",
      position: "CEO at ABC",
      msg: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
      image: man,
    },
    {
      name: "Kisan Mahat",
      position: "Boss at ABC",
      msg: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
      image: manone,
    },
    {
      name: "ABCDEFGHIJK SANDNEUHDWDAK",
      position: "XNSUCUWJNSZ at  chehj",
      msg: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”',
      image: mantwo,
    },
  ];
  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      if (test >= Testimonialsdata.length - 1) {
        settest(0);
      } else {
        settest((prev) => prev + 1);
      }
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, [test]);

  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-10 ">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-1">
          <div className="text-orange-500 uppercase font-bold text-xl">
            Happy customer
          </div>
          <div className="uppercase text-4xl font-bold">Testimonials</div>
        </div>
        <div className="relative overflow-clip h-full w-full">
          {Testimonialsdata.map((val, i) => {
            return (
              <div
                className={`grid gap-8 ${
                  i == test
                    ? "translate-x-0"
                    : i > test
                    ? "-translate-x-full"
                    : "translate-x-full"
                } absolute transition-all ease-in-out duration-700 delay-150`}
              >
                <img
                  className="h-24 w-24 rounded-full "
                  src={val.image}
                  alt=""
                />
                <div className="flex flex-col ">
                  <div className="text-orange-500 text-2xl font-semibold ">
                    {val.name}
                  </div>
                  <div className="text-gray-700 text-sm">{val.position}</div>
                </div>
                <div className="relative mt-3 w-11/12">
                  <div className="text-5xl font-bold rotate-6 absolute -top-8 left-0">
                    "
                  </div>
                  <div>{val.msg}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 items-center">
          {
            Testimonialsdata.map((val,i) => {
            return(

              <div className={`${i==test?'bg-orange-500':'bg-white'} h-3 w-3 rounded-full border border-orange-500`}></div>
            )
            })
          }
        </div>
      </div>

      <div className="grid gap-6 ">
        <div className="flex flex-col gap-1">
          <div className="text-orange-500 uppercase font-bold text-xl">FAQ</div>
          <div className="uppercase text-4xl font-bold">
            Frequently Asked Questions
          </div>
        </div>
        <div className="grid  ">
          {faquestions.map((val, i) => {
            return (
              <div
                className=" "
                onClick={() => {
                  if (show == i) {
                    setshow(null);
                  } else {
                    setshow(i);
                  }
                }}
              >
                <div
                  className={`flex py-2.5 px-4 cursor-pointer transition-all ease-in-out duration-500 delay-75 items-center gap-3    ${
                    show == i
                      ? "bg-orange-500 text-white font-semibold"
                      : "bg-white text-black font-"
                  }`}
                >
                  <div>{show == i ? <FaMinus /> : <IoMdAdd />}</div>
                  <div className="first-letter:capitalize">{val.title}</div>
                </div>
                <div
                  className={`px-4 pt-2 text-gray-600 ${
                    show == i ? "h-28 opacity-100" : "h-0 opacity-0"
                  } transition-all ease-in-out duration-500 delay-75`}
                >
                  {val.Ans}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsandFAQ;
