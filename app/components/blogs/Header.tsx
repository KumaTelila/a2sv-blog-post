import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12">
      <div className="flex flex-col gap-1">
        <div className="text-[32px]  font-semibold">
          <h1>Blogs</h1>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-5 text-[20px]">
        <div className="flex rounded-full border-2 h-16 w-96">
          <input
            type="text"
            placeholder="Search ..."
            className=" outline-none ml-6"
          />
        </div>
        <button className="flex items-center justify-center rounded-full font-semibold bg-[#264FAD] text-white h-16 w-48">
          <h3>+ new Blog</h3>
        </button>
      </div>
    </div>
  );
};

export default Header;
