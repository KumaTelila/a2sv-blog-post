import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import Description from "../components/description/Description";
import Footer from "../components/footer/Footer";
import Header from "../components/blogs/Header";

const DescriptionPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[138px] px-6 md:px-20">
        <div className="flex flex-col gap-10 pt-14">
          <Suspense>
          <Description />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default DescriptionPage;
