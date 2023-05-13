import React from "react";

import TagsNav from "../nav/TagsNav.jsx";
import { Outlet } from "react-router-dom";
export default function Websites() {
  return (
    <div className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 ">
      <TagsNav />
      <Outlet></Outlet>

      {/* BUTTON */}
      <div className="mx-auto">
        <button className="bg-[#ffd67d] text-lg rounded-full w-32">
          Load more
        </button>
      </div>
    </div>
  );
}
