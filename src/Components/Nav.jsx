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
      title: "contact",
      path: "/contact",
    },
    {
      title: "services",
      path: "/services",
    },
  ];
  return (
    <nav className="flex justify-between h-fit py-5 w-screen items-center fixed top-0 left-0  z-50">
      <div className="flex justify-between items-center w-10/12 mx-auto">
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
                } capitalize font-normal`}
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
