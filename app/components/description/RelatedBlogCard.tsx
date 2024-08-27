import React from "react";
import { dummy } from "./dummy";
import Image from "next/image";

const RelatedBlogCard = () => {
  return (
    <div className="flex flex-col gap-6 w-[477px]">
      <Image
        src={dummy.image}
        width={477}
        height={295}
        alt="Image"
        className="w-[477px] h-[332.96px] rounded-t-lg"
      />
      <p className="text-[20px] font-medium text-[#5E5873]">{dummy.title}</p>
      <div className="flex gap-4">
        <Image
          src={dummy.user_image}
          width={28}
          height={28}
          alt="profile-picture"
          className="w-[28px] h-[28px] rounded-full"
        />
        <p className="text-[12px] font-normal text-[#B9B9C3]">by</p>
        <p className="text-[14px] font-semibold text-[#6E6B7B]">
          {dummy.author}
        </p>
        <div className="w-1 h-6 rounded-lg bg-[#B9B9C3]"></div>
        <p className="text-[14px] font-normal text-[#B9B9C3]">Jan 10, 2020</p>
      </div>
      <div className="flex gap-4">
        <div className="flex  gap-2 justify-center items-center bg-[#D7D7D7] rounded-full min-w-40 h-14">
          <p className="text-[19px] text-[#8E8E8E] font-semibold px-2">UX/UI</p>
        </div>
        <div className="flex gap-2 justify-center items-center bg-[#D7D7D7] rounded-full min-w-40 h-14">
          <p className="text-[19px] text-[#8E8E8E] font-semibold px-2">
            Development
          </p>
        </div>
      </div>
      <p className="text-[16px] font-normal text-[#6E6B7B]">{dummy.description.heading}</p>
    </div>
  );
};

export default RelatedBlogCard;
