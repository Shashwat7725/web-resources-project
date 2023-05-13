import React from "react";

import TagsNav from "../nav/TagsNav";
import { Outlet } from "react-router-dom";

export default function Challenges() {
  return (
    <div className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6">
      {/* categories */}
      <TagsNav></TagsNav>
      <Outlet></Outlet>
      <div className="mx-auto">
        <button className="bg-[#ffd67d] text-lg rounded-full w-32">
          Load more
        </button>
      </div>
    </div>
  );
}

/*
background-image: linear-gradient(to right top, #fdc727, #fdc320, #febf18, #febb0e, #ffb700);
*/
