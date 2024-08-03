import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";

function Nav() {
  const location = useLocation();
  const [scrollheight, setscrollheight] = useState(0);
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
  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log(pageYOffset, scrollY);
      setscrollheight(scrollY);
    });

    return () => {
      window.removeEventListener("scroll", function () {
        setscrollheight(scrollY);
      });
    };
  }, []);

  return (
    <nav
      className={`flex ${
        scrollheight >= 300 ? "bg-orange-500 shadow-md" : "bg-transparent"
      } justify-between h-fit py-5 w-screen items-center fixed transition-all ease-in-out delay-75 duration-500 top-0 left-0  z-50`}
    >
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div className="flex justify-center   items-center">
          <div className="text-5xl text-gray-100">
            <BiSolidPlaneAlt />
          </div>
          <div className="text-2xl font-semibold playwrite text-gray-100 text-center shadow-transparent z-10">
            Wanderlust <br /> Ventures
          </div>
        </div>
        <div className=" flex gap-8 cursor-pointer text-md font-medium">
          {navitem.map((value, index) => {
            return (
              <Link
                key={index}
                to={value.path}
                className={`${
                  location.pathname == value.path
                    ? "text-white border-white"
                    : "text-gray-100 border-transparent"
                } capitalize font-normal border-b-2 pb-3 transition-all ease-in-out duration-500 delay-75`}
              >
                {value.title}
              </Link>
            );
          })}
        </div>
        <Link
          to="/contact"
          className={` ${
            scrollheight >= 300
              ? "text-white border-white hover:bg-white hover:text-orange-500"
              : "bg-transparent  border-slate-700 text-white hover:bg-orange-500 hover:border-orange-500 "
          }  w-hit h-fit text-sm px-6 py-2 border rounded-full transition-all ease-in-out duration-700 delay-75 `}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
