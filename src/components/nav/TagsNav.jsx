import React from "react";
import { Link } from "react-router-dom";

const TagsNav = () => {
  return (
    <nav className="categories text-lg py-2 bg-[#ffd67d] flex  gap-12 text-[#562c35] px-28">
      {/* <Link to="all-categories" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">
          All Categories{" "}
        </p>
      </Link> */}
      <Link to="html" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">HTML</p>
      </Link>
      <Link to="css" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">CSS</p>
      </Link>
      <Link to="javascript" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">Javascript</p>
      </Link>
      <Link to="react" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">React</p>
      </Link>
    </nav>
  );
};

export default TagsNav;
