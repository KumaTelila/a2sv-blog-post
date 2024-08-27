import React from "react";
import Image from "next/image";
import Link from "next/link";
import { linksItemsList } from "./linksItemsList";
import { teamsItemsList } from "./teamsItemsList";
import { blogsItemsList } from "./blogsItemsList";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col px-10 gap-10 border-t-2 pt-8">
      <div className="flex justify-between items-center gap-4">
        <Image src={"/assets/footer.svg"} width={296} height={221} alt="logo" />
        <div className="flex flex-col gap-4">
          <p className="text-[24px] font-semibold">
            Get involved in improving tech education in Africa!
          </p>
          <button className="bg-[#264FAD] rounded-lg w-40 h-16 flex justify-center items-center text-white font-bold text-[20px]">
            Support Us
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Links</p>
          {linksItemsList.map((item, index) => (
            <Link
              className="text-[22px] font-light"
              href={item.href}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Teams</p>
          {teamsItemsList.map((item, index) => (
            <p className="text-[22px] font-light" key={index}>
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Blogs</p>
          {blogsItemsList.map((item, index) => (
            <p className="text-[22px] font-light" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[20px] text-[#0F0F0F] font-light">© 2020 Africa to Silicon Valley, Inc. All right reserved.</p>
        <div className="flex gap-4">
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
