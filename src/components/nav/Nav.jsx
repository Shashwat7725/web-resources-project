import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="flex flex-col fixed h-screen bg-[#2a1600] py-8 px-4 text-xl w-[5%] items-center gap-36">
      <NavLink to="/">
        <img className="s" src="../src/assets/Group 1.png" alt="logo" />
      </NavLink>

      <div className="flex flex-col gap-12">
        <NavLink to="/">
          <FaHome className="text-white  hover:text-[#ffd67d]" />
        </NavLink>
        <NavLink to="/Videos">
          <BsFillCameraVideoFill className="text-white hover:text-[#ffd67d]" />
        </NavLink>
        <NavLink to="/Websites">
          <CgWebsite className="text-white hover:text-[#ffd67d]" />
        </NavLink>
        <NavLink to="/Challenges">
          <FaLaptopCode className="text-white hover:text-[#ffd67d]" />
        </NavLink>
        <NavLink to="/Tools">
          <BsTools className="text-white hover:text-[#ffd67d]" />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
