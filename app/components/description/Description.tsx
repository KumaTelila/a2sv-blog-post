import Image from "next/image";
import React from "react";
import { dummy } from "./dummy";
import RelatedBlogCard from "./RelatedBlogCard";

const Description = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-12">
      <p className="text-[48px] font-normal">{dummy.title}</p>
      <div className="flex gap-4 items-center">
        <p className="text-[16px] font-light uppercase">{dummy.tag} </p>
        <div className="w-1 h-4 rounded-md bg-[#535353]"></div>
        <p className="text-[16px] font-light uppercase">6 min Read</p>
      </div>
      <Image
        src={"/assets/placeholder.jpeg"}
        width={449}
        height={295}
        alt="profile-picture"
        className="w-[1586px] h-[792px] pt-10"
      />
      <div className="flex flex-col justify-center items-center px-40 gap-6 ">
        <Image
          src={dummy.user_image}
          width={89}
          height={89}
          alt="profile-picture"
          className="block mx-auto min-h-[89px] rounded-full"
        />
        <div className="flex gap-4 items-center">
          <p className="text-[16px] font-normal uppercase">{dummy.author}</p>
          <div className="w-1 h-4 rounded-md bg-[#535353]"></div>
          <p className="text-[16px] font-normal uppercase">
            {dummy.user_profession}
          </p>
        </div>
        <p className="text-[16px] font-semibold uppercase text-[#264FAD]">
          {dummy.username}
        </p>
        <p className="text-[40px] font-normal">{dummy.description.heading}</p>
        <p className="text-20px font-normal texxt-[#737373]">
          {dummy.description.content}
        </p>
      </div>
      {/* related blogs section */}
      <div className="px-10">
        <p className="text-[28px] font-semibold justify-start">Related Blogs</p>
        <div className="flex justify-between gap-6">
          <RelatedBlogCard />
          <RelatedBlogCard />
          <RelatedBlogCard />
        </div>
      </div>
    </div>
  );
};

export default Description;
