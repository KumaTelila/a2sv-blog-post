"use client";
import React from "react";
import Image from "next/image";
import { useGetAllblogsQuery } from "@/app/lib/features/blogSlice";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { BlogPost } from "@/app/types/blogPost";
import Link from "next/link";

const BlogsCard = ({
  _id,
  image,
  title,
  description,
  author,
  tags,
  skills,
}: BlogPost) => {
  return (
    <div className="max-md:flex-col flex px-20 items-center py-3 justify-between gap-6 border-t-2">
      <div className="flex flex-col gap-6 w-3/4">
        <div className="flex gap-4">
          <div className="flex justify-center items-center ">
            <img
              src={author?.image || "/assets/profile.png"}
              alt="profile-picture"
              className="block mx-auto h-[89px] w-[89px] rounded-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <p className="font-semibold text-[24px]">{author?.name}</p>
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
        <Link href={`/description?id=${_id}`}>
          <p className="text-[34px] font-bold">{title}</p>
          <p
            className="text-[24px] text-[#737373] font-normal"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className="flex gap-4 pt-4">
            {tags?.map((tag, index) => (
              <div
                key={index}
                className="flex  gap-2 justify-center items-center bg-[#F5F5F5] rounded-full min-w-40 h-14"
              >
                <p className="text-[19px] text-[#8E8E8E] font-semibold px-2">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </Link>
      </div>
      <div className="w-1/4">
        <img
          src={image || "/assets/placeholder.jpeg"}
          alt="image"
          className="w-[449px] h-[295px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default BlogsCard;
