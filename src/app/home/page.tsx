"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const quoteText = `“If you put your mind to it, you can accomplish anything.” - Doc Emmet Brown`;

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://scheduler.zoom.us/brigit-jacoby/goldengatetherapy");
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

        {/* Solutions for Sustainability Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              <strong>Virtual and In-Home Services</strong> available throughout
              California.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="/boy_laptop.png"
              alt="Virtual and In-Home Services"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Routines and Stress Section */}
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              <strong>Routines</strong> break, <strong>meltdowns</strong>{" "}
              happen, and <strong>stress</strong> is induced for everyone
              involved.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="/screaming.png"
              alt="Routines and Stress"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Changes in Family Dynamics Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              <strong>This is where I come in!</strong> Changes in family
              dynamics are a source of information and insight into the root of
              a problem or a potential solution.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="/family_table.png"
              alt="Changes in Family Dynamics"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Embrace Change and Resilience Section */}
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I am here to help you <strong>embrace change</strong> as we
              <strong> uncover resiliency</strong> all while dealing with
              feelings of <strong>shame</strong>, <strong>discomfort</strong>,
              and <strong>guilt</strong>.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="/counseling.png"
              alt="Embrace Change and Resilience"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Strength-based Approach Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Using a <strong>Strength-based approach</strong>, your goals and
              hopes for the future are much closer than you think!
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="/strength.png"
              alt="Strength-based Approach"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8 mx-4 sm:mx-0">
          <blockquote className="text-lg sm:text-2xl text-gray-900 italic font-semibold border-l-4 border-red-600 pl-4">
            {quoteText}
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
}
