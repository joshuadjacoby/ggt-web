"use client";

import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://calendly.com/goldengatetherapist/therapy-session");
  };

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
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-gray-600">
            Welcome to Golden Gate Therapy
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Helping you achieve balance and well-being.
          </p>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
