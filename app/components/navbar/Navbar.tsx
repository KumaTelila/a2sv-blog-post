import Image from "next/image";
import React from "react";
import { navbarItemsLists } from "./navbarItemsLists";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-white shadow-md h-[118px] px-6">
      <div className="flex shrink-0">
        <Link href={"/"}>
        <Image src={"/assets/logo.svg"} width={197} height={50} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center font-semibold text-[#565656]">
        <ul className="flex items-center">
          {navbarItemsLists.map((item, index) => (
            <li key={index} className="px-4">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-4 text-[#3C3C3C] font-bold">
            <Link href={"/login"}>Login</Link>
          </li>
          <button className="px-4 bg-[#264FAD] rounded-lg w-40 h-16 flex justify-center items-center text-white font-bold">
            <Link href={"/register"}>Donate</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
