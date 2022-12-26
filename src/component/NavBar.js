import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [isNav, setIsNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },

  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="">
        <h1 className="text-5xl font-signature ml-2">Q</h1>
      </div>
      <ul className="md:flex hidden ">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-gray-300 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setIsNav((prevNav) => !prevNav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {isNav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      {isNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0  w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize text-gray-300 hover:scale-105 duration-200 my-5"
              >
                <Link onClick={() => setIsNav((prevNav) => !prevNav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default NavBar;
