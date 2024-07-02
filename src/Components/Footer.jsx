import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-screen h-fit  ">
      <div className="bg-orange-500 flex  ">
        <div className="w-10/12 mx-auto py-10 flex justify-between items-center text-white ">
          <div className="text-3xl font-semibold ">
            Begin your adventurous journey here.
          </div>
          <div className="w-fit h-fit px-10 py-2 rounded-full border border-white capitalize ">
            {" "}
            get started
          </div>
        </div>
      </div>
      <div>
        <div className="w-10/12 mx-auto grid grid-cols-7 ">
          <div className="col-span-2 grid gap-5">
            <div className="text-2xl font-semibold">About Passport</div>
            <div className="text-gray-500 ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </div>
            <div className="text-2xl font-semibold ">Connect</div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                {" "}
                <FaInstagram />
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                <FaTwitter />
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                <FaFacebookF />{" "}
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                <FaLinkedinIn />{" "}
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                <FaPinterest />{" "}
              </div>
            </div>
          </div>

          <div>links</div>

          <div>company</div>

          <div>contact</div>
        </div>
        <div className=" text-center text-gray-500">
          Copyright ©2024 All rights reserved{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
