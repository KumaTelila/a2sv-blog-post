import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/blogs/Header";
import BlogsCard from "./components/blogs/BlogsCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogsCard/>
    </>
  );
}
