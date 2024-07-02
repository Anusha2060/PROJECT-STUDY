 import React from "react";
import Banner from "../Components/UI/banner";

function About() {
  return (
    <div>
      <Banner>
        <div  className="h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div className="capitalize text-5xl font-bold">about us</div>
          <div className="w-5/12 text-md text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
    </div>
  );
}

export default About;
