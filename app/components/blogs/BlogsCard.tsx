import React from "react";
import Image from "next/image";

const BlogsCard = () => {
  return (
    <div className="flex px-20 items-center py-3">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex justify-center items-center ">
            <Image
              src={"/assets/profile.jpg"}
              width={89}
              height={89}
              alt="profile-picture"
              className="block mx-auto min-h-[89px] rounded-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <p className="font-semibold text-[24px]">Yididiya Kebede</p>
                <div className="w-2 h-2 rounded-full bg-[#535353]"></div>
                <p className="font-medium text-[17px] text-[#868686]">
                  Apr 16, 2022
                </p>
              </div>
              <p className="text-[17px] text-[#868686] font-semibold">
                SOFTWARE ENGINEER
              </p>
            </div>
          </div>
        </div>
        <p className="text-[34px] font-bold">
          The essential guide to Competitive Programming Tab System On React : 3
          ways to do it.{" "}
        </p>
        <p className="text-[24px] text-[#737373] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </p>
        <div className="flex gap-4">
          <div className="flex  gap-2 justify-center items-center bg-[#D7D7D7] rounded-full min-w-40 h-14">
            <p className="text-[19px] text-[#8E8E8E] font-semibold px-2">
              UX/UI
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-[#D7D7D7] rounded-full min-w-40 h-14">
            <p className="text-[19px] text-[#8E8E8E] font-semibold px-2">
              Development
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={"/assets/placeholder.jpeg"}
          width={449}
          height={295}
          alt="image"
          className="w-auto h-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default BlogsCard;
