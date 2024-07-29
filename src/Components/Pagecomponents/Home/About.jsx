import React from "react";
import imgone from "../../../assets/about.jpeg";
import imgtow from "../../../assets/about1.jpeg";
function Aboutsection() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-5">
      <div className="flex flex-col justify-between gap-6 ">
        <div className="flex flex-col capitalize">
          <div className="text-xl text-orange-500 font-medium animatedslide playflair">about us</div>
          <div className="text-5xl font-bold tracking-wider leading-tight animatedslide playflair">
            Explore All Corners of The World With Us
          </div>
        </div>
        <div className="w-11/12 text-gray-600 animatedslide  open-sans  ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. <br />
          <br /> A small river named Duden flows by their place and supplies it
          with the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </div>

        <div className="w-fit h-fit px-8 py-2 mt-4 hover:bg-white hover:text-orange-500 hover:font-medium
         transition-all ease-in-out duration-700 delay-75 cursor-pointer rounded-full border border-orange-500 capitalize bg-orange-500 text-white animatedslide ">
          read more
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 place-content-center mt-8 animatedslide">
        <img
          src={imgone}
          alt="imgone"
          className="h-80 w-full rounded-sm object-cover"
        />
        <img
          src={imgtow}
          alt="imgtow"
          className="h-80 w-full rounded-sm mt-14 object-cover"
        />
      </div>
    </div>
  );
}

export default Aboutsection;
