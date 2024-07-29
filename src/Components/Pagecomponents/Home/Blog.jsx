import React from "react";
import blogone from "../../../assets/n2.jpg";
function Blog( {blogdata}) {
 
  return (
    <div className="animatedslide">
      <div className="grid grid-cols-4 gap-10">
        {blogdata.map((val, i) => {
          return (
            <div className="flex flex-col gap-6 cursor-pointer ">
              <img
                className="w-full h-60 object-cover"
                src={val.image}
                alt=""
              />
              <div className="px-4">
                <div className="text-gray-700 text-sm">{val.date}</div>
                <div className="text-md  font-semibold hover:text-orange-500 playflair">
                  {val.title}
                </div>
                <div className="text-sm text-gray-700 py-2 pb-4">
                  {val.description}
                </div>
                <div className="text-orange-500 text-md hover:text-orange-800">{`Read more >`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
