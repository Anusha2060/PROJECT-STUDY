import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const navitem = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "blogs",
      path: "/blogs",
    },
  ];
  return (
    <nav className="flex justify-between h-fit py-5 w-screen items-center fixed top-0 left-0  z-50">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className=" flex gap-8 cursor-pointer text-md font-medium">
          {navitem.map((value, index) => {
            return (
              <Link
                key={index}
                to={value.path}
                className={`${
                  location.pathname == value.path
                    ? "text-white"
                    : "text-gray-200"
                } capitalize font-normal`}
              >
                {value.title}
              </Link>
            );
          })}
        </div>
        <Link to="/contact" className="w-hit h-fit text-sm px-6 py-2 border border-slate-700 rounded-full text-white hover:bg-orange-500 hover:border-orange-500 transition-all ease-in-out duration-700 delay-75  ">
        Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
