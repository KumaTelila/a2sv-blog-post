import React from "react";
import Navbar from "../components/navbar/Navbar";
import Description from "../components/description/Description";
import Footer from "../components/footer/Footer";

const DescriptionPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Description />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DescriptionPage;
