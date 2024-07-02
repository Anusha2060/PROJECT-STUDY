import React from "react";
import Logo from "../assets/logo.png";
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
      title: "contact",
      path: "/contact",
    },
    {
      title: "services",
      path: "/services",
    },
  ];
  return (
    <nav className="flex justify-between h-fit w-screen items-center fixed top-0 left-0 bg-black bg-opacity-30 z-50">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <img src={Logo} className=" bg-red-500 h-28 object-cover w-44 " />
        <div className=" flex gap-8 cursor-pointertext-lg font-medium">
          {navitem.map((value, index) => {
            return (
              <Link
                key={index}
                to={value.path}
                className={`${
                  location.pathname == value.path
                    ? "text-white"
                    : "text-gray-200"
                } capitalize`}
              >
                {value.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
