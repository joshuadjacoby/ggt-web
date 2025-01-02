import Image from "next/image";
import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function About() {
  const aboutTextPath = path.join(process.cwd(), "public", "about.txt");
  const aboutText = fs.readFileSync(aboutTextPath, "utf-8");

  return (
    <>
      <Navbar />
      <div
        className="bg-gray-100"
        style={{
          minHeight: "85vh",
          background: "linear-gradient(to bottom, #E6E6E6, #F5F5F5)",
        }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative w-full max-w-md md:max-w-lg h-96 md:h-[500px]">
              <Image
                src="/brigit.png"
                alt="About Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutText}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
