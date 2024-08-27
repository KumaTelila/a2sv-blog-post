import React from "react";

const Header = () => {
  return (
    <div className="flex max-md:flex-col justify-between max-md: gap-3 max-md:items-center">
      <div className="flex flex-col gap-1">
        <div className="text-[32px] font-Poppins font-black">
          <h1>Opportunities</h1>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-5">
        <div className="flex gap-2 text-base font-Epilogue text-[#7C8493]">
          <h3>Add new Blog</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
