"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const solutionsText = `Routines break, meltdowns happen and stress is induced for everyone involved.
This is where I come in (literally!). Changes in family dynamics are a source of information and insight into the root of a problem or a potential solution.
I am here to help you embrace change as we uncover resiliency all while dealing with feelings of shame, discomfort and guilt.`;

const quoteText = `“If you put your mind to it, you can accomplish anything.” - Doc Emmet Brown`;

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://calendly.com/goldengatetherapist/therapy-session");
  };

  return (
    <div className="bg-gray-800">
      <Navbar />
      <div className="relative">
        {/* Image Section */}
        <div className="relative w-full h-[85vh]">
          <Image
            src="/family_home.png"
            alt="Family Home"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          {/* Title and Subtitle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              Welcome to Golden Gate Therapy
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 text-center">
              Helping you achieve balance and well-being.
            </p>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 text-sm sm:text-base"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Solutions for Sustainability
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {solutionsText}
          </p>
          <br />
          {/* Quote Section */}
          <blockquote className="text-lg sm:text-2xl text-gray-900 italic font-semibold border-l-4 border-red-600 pl-4">
            {quoteText}
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
}
