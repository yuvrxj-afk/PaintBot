import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#ffffff] sm:px-8 px-4 py-3 border-y-4 border-x-0 border-b-[#5386e4] border-t-[#ffffff]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-15  object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#2b62c9] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#dbdee4] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
