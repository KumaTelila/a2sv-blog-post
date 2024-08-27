import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="flex px-20 items-center py-3 animate-pulse">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="w-48 h-6 bg-gray-300 rounded"></div>
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="w-full h-8 bg-gray-300 rounded"></div>
        <div className="w-full h-6 bg-gray-300 rounded"></div>
        <div className="flex gap-4">
          <div className="w-20 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-20 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="w-96 h-60 bg-gray-300 rounded-2xl"></div>
    </div>
  );
};

export default BlogCardSkeleton;
