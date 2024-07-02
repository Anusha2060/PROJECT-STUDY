import React from "react";
import Banner from "../Components/UI/banner";
function Home() {
  return (
    <div className="bg-red-500">
      <Banner>
      <div className="h-full w-5/12 justify-center flex flex-col gap-10 text-white ">
      <div className="text-5xl font-bold capitalize leading-normal">my name is anusha gharti chhetri</div>
      <div className="flex items-center gap-4"> 
        <div className="h-14 w-14 p-1 rounded-full border border-white flex items-center justify-center ">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-gray-400">
          icon
        </div>
        </div>
        <div className="text-2xl  capitalize"> watch now</div>
      </div>
      </div>

      </Banner>

    </div>
  );
}

export default Home;
