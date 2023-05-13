import React from "react";
// nav
import Nav from "./components/nav/Nav.jsx";
// components
import Websites from "./components/websites/Websites.jsx";
import Books from "./components/books/Books.jsx";
import Challenges from "./components/challenges/Challenges.jsx";
import Home from "./components/Home.jsx";
import Videos from "./components/videos/Videos.jsx";

import { Route, Routes } from "react-router-dom";
//-------------Videos-------------
import { HtmlV } from "./components/videos/HtmlV.jsx";
import { JavascriptV } from "./components/videos/JavascriptV.jsx";
import { CssV } from "./components/videos/CssV.jsx";
import { ReactV } from "./components/videos/Reactv.jsx";

//--------------Websites-----------
import { Htmlw } from "./components/websites/Htmlw.jsx";
import { Cssw } from "./components/websites/Cssw.jsx";
import { Javascriptw } from "./components/websites/Javascriptw.jsx";
import { Reactw } from "./components/websites/Reactw.jsx";

//-------------Books---------------
// import { HtmlB } from "./components/books/HtmlB.jsx";
import { JavascriptB } from "./components/books/JavascriptB.jsx";
// import { ReactB } from "./components/books/ReactB.jsx";
// import { CssB } from "./components/books/CssB.jsx";

//-------------Challenges-----------
// import { HtmlC } from "./components/challenges/HtmlC.jsx";
import { CssC } from "./components/challenges/CssC.jsx";
import { JavascriptC } from "./components/challenges/JavascriptC.jsx";
// import { ReactC } from "./components/challenges/ReactC.jsx";
import { AllCategories } from "./components/AllCategories.jsx";
const App = () => {
  return (
    <div className="flex">
      <Nav className=""></Nav>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/Websites" element={<Websites />}></Route>
        <Route path="/Challenges" element={<Challenges />}></Route>
        <Route path="/Books" element={<Books />}></Route>

        {/***********  Videos ************************/}
        <Route path="/Videos" element={<Videos />}>
          {/* All Categories */}
          <Route
            path="all-categories"
            element={<AllCategories></AllCategories>}
          ></Route>
          <Route path="html" element={<HtmlV />}></Route>
          <Route path="css" element={<CssV />}></Route>
          <Route path="javascript" element={<JavascriptV />}></Route>
          <Route path="react" element={<ReactV />}></Route>
        </Route>

        {/************  Websites *************/}
        <Route path="/Websites" element={<Websites />}>
          {/* All Categories */}
          <Route
            path="all-categories"
            element={<AllCategories></AllCategories>}
          ></Route>
          <Route path="html" element={<Htmlw />}></Route>
          <Route path="css" element={<Cssw />}></Route>
          <Route path="javascript" element={<Javascriptw />}></Route>
          <Route path="react" element={<Reactw />}></Route>
        </Route>
        {/*  Challenges*/}
        <Route path="challenges" element={<Challenges />}>
          {/* <Route path="html" element={<HtmlC />}></Route> */}
          <Route path="css" element={<CssC />}></Route>
          <Route path="javascript" element={<JavascriptC />}></Route>
          {/* <Route path="react" element={<ReactC></ReactC>}></Route> */}
        </Route>
        {/* Books */}
        <Route path="books" element={<Books />}>
          {/* <Route path="html" element={<HtmlB />}></Route> */}
          {/* <Route path="css" element={<CssB />}></Route> */}
          <Route path="javascript" element={<JavascriptB />}></Route>
          {/* <Route path="react" element={<ReactB />}></Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
