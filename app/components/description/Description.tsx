"use client"
import Image from "next/image";
import React from "react";
import { dummy } from "./dummy";
import RelatedBlogCard from "./RelatedBlogCard";
import { useGetBlogByIdQuery } from "@/app/lib/features/blogSlice";
import { BlogPost } from "@/app/types/blogPost";

const Description = () => {
  const queryId = new URLSearchParams(window.location.search).get("id");
  const { data, isError, isLoading } = useGetBlogByIdQuery(queryId);
  

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const blog: BlogPost = data;
  console.log(blog)
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-12">
      <p className="text-[48px] font-normal">{blog.title}</p>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4">
        {blog.tags?.map((tag, index) => (      
        <p key={index} className="text-[16px] font-light uppercase">{tag} </p>
        ))}
        </div>
        <div className="w-1 h-4 rounded-md bg-[#535353]"></div>
        <p className="text-[16px] font-light uppercase">6 min Read</p>
      </div>
      <img
        src={blog.image}
        alt="profile-picture"
        className="w-[1586px] h-[792px] pt-10"
      />
      <div className="flex flex-col justify-center items-center px-40 gap-6 ">
        <img
          src={blog.author?.image || "/assets/profile.png"}
          alt="profile-picture"
          className="block mx-auto h-[89px] w-[89px] rounded-full"
        />
        <div className="flex gap-4 items-center">
          <p className="text-[16px] font-normal uppercase">{blog.author?.name}</p>
          <div className="w-1 h-4 rounded-md bg-[#535353]"></div>
          <p className="text-[16px] font-normal uppercase">
            {dummy.user_profession}
          </p>
        </div>
        <p className="text-[16px] font-semibold uppercase text-[#264FAD]">
          {dummy.username}
        </p>
        <p className="text-20px font-normal texxt-[#737373]">
          {blog.description}
        </p>
      </div>
      {/* related blogs section */}
      <div className="px-10 pb-10">
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
