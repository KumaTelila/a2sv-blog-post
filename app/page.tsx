"use client";
import React from "react";
import { useGetAllblogsQuery } from "./lib/features/blogSlice";
import BlogCardSkeleton from "./components/blogs/BlogCardSkeleton";
import { BlogPost } from "./types/blogPost";
import BlogsCard from "./components/blogs/BlogsCard";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/blogs/Header";

const Home = () => {
  const { data, isError, isLoading } = useGetAllblogsQuery(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[138px] px-6 md:px-20">
          <Header />

          <div className="flex flex-col gap-10 pt-14">
            <BlogCardSkeleton />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[138px] px-6 md:px-20">
          <Header />

          <div className="flex flex-col gap-10 pt-14">
            <p className="text-center text-3xl text-red-500">Error loading blogs.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const blogs: BlogPost[] = data;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[138px] px-6 md:px-20">
        <Header />

        <div className="flex flex-col gap-10 pt-14">
          {blogs.map((blog, index) => (
            <div key={index}>
              <BlogsCard
                title={blog.title}
                author={blog.author}
                image={blog.image}
                description={blog.description}
                _id={blog._id}
                skills={blog.skills}
                tags={blog.tags}
                isPending={blog.isPending}
                likes={blog.likes}
                relatedBlogs={blog.relatedBlogs}
                createdAt={blog.createdAt}
                updatedAt={blog.updatedAt}
                __v={blog.__v}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
