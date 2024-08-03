import React from "react";
import NEw from "../../assets/n2.jpg";

export default function Banner({ children }) {
  return (
    <div className="relative h-screen animatedslide">
      <div className="h-full w-full bg-black bg-opacity-50 absolute top-0 left-0 "></div>
      <img src={NEw} className=" h-full w-full " />

      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-10/12 mx-auto z-10 animatedslide">
        {children}
      </div>
    </div>
  );
}
