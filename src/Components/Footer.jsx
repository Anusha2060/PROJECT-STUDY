import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-fit mt-28  bg-gray-200">
      <div className=" bg-orange-500 flex">
        <div className="w-10/12 mx-auto py-12 flex justify-between items-center text-white ">
          <div className="text-3xl font-semibold">
            Begin your adventurous journey here.
          </div>
          <div className="w-fit h-fit px-8 py-2 rounded-full border border-white capitalize  hover:bg-white hover:text-orange-500 hover:font-medium
         transition-all ease-in-out duration-700 delay-75 cursor-pointer  bg-orange-500 text-white ">
            get started
          </div>
        </div>
      </div>
      <div className="py-16 bg-#EFEFEF">
        <div className="w-10/12 mx-auto grid grid-cols-8 gap-10 ">
          <div className="col-span-3 grid gap-5">
            <div className="text-2xl font-semibold">About Passport</div>
            <div className="text-gray-500 ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </div>
            <div className="text-2xl font-semibold mt-4 ">Connect</div>
            <div className="flex items-center gap-2 cursor-pointer  ">
              <div className="h-10 w-10 hover:bg-orange-500 transition-all ease-in-out duration-500 delay-75 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <FaInstagram />
              </div>
              <div className="h-10 w-10  hover:bg-orange-500 transition-all ease-in-out duration-500 delay-75  rounded-full bg-gray-500 flex items-center justify-center text-white">
                <FaTwitter />
              </div>
              <div className="h-10 w-10  hover:bg-orange-500  transition-all ease-in-out duration-500 delay-75 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <FaFacebookF />
              </div>
              <div className="h-10 w-10  hover:bg-orange-500 transition-all ease-in-out duration-500 delay-75 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <FaLinkedinIn />
              </div>
              <div className="h-10 w-10  hover:bg-orange-500 transition-all ease-in-out duration-500 delay-75 rounded-full bg-gray-500 flex items-center justify-center text-white">
                <FaPinterest />
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5 ">
            <div className="capitalize text-2xl font-semibold">links</div>
            <div className=" flex flex-col gap-2 text-gray-500 cursor-pointer">
              <div>About Us </div>
              <div>Services</div>
              <div>News</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5 ">
            <div className="capitalize text-2xl font-semibold">Company</div>
            <div className=" flex flex-col gap-2 text-gray-500 cursor-pointer">
              <div>About Us </div>
              <div>Services</div>
              <div>News</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div className="col-span-3 flex flex-col gap-5">
            <div className="capitalize text-2xl font-semibold ">contact</div>
            <div className="flex flex-col gap-2 text-gray-500">
              <div>43 Raymouth Rd. Baltemoer, London 3910</div>
              <div className="cursor-pointer">+1(123)-456-7890</div>
              <div className="cursor-pointer">+1(123)-456-7890</div>
              <div className="cursor-pointer">info@mydomain.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-gray-500 py-8 flex justify-center items-center font-sans">
        Copyright © 2024 All rights reserved{" "}
      </div>
    </div>
  );
}

export default Footer;
