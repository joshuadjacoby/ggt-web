"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Break down the about GGT text into smaller sections for better readability
const aboutGGTIntro = `Golden Gate Therapy was established in April 2024 to provide high-quality psychotherapy services to children and their families.`;
const aboutGGTMission = `Founder of Golden Gate Therapy, Brigit Jacoby, aims to work diligently with your family’s particular needs.`;
const aboutGGTImportance = `Educators such as Teachers, Tutors, and Therapists are some of the first non-family members to interact with your child. In early stages of life, safety, belonging, and confidence are beginning to form in the child’s brain.`;
const aboutGGTRelationships = `Interpersonal relationships, both family and non-family, are crucial for early development, including social skills such as trust, respect, and boundaries.`;
const aboutGGTImpact = `For young people, every relationship is significant and important. This is where Golden Gate Therapy enters.`;

// Break down the about Brigit text into smaller sections for better readability
const aboutBrigitIntro = `Brigit Jacoby is a Licensed Clinical Social Worker living and working in the San Francisco Bay Area.`;
const aboutBrigitEducation = `Brigit received her Masters of Social Work from the University of Southern California and graduated from the University of California, Irvine, with a B.A. in Psychology and Social Behavior.`;
const aboutBrigitExperience = `While obtaining her undergraduate and graduate degrees, Brigit spent a lot of her time working with children as young as 2.5 years old to young adults in their 20s and their families, which inspired the creation of Golden Gate Therapy.`;
const aboutBrigitPersonal = `In her personal time, Brigit enjoys spending time with her dog Marshall by walking to parks and exploring San Francisco with her husband.`;

export default function About() {
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
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              About Golden Gate Therapy
            </h1>
          </div>

          {/* First Section: Logo and About GGT Text Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-auto max-w-md md:max-w-lg mb-8 lg:mb-0">
              <Image
                src="/logo.png"
                alt="About Logo"
                layout="intrinsic"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutGGTIntro}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutGGTMission}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutGGTImportance}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutGGTRelationships}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                  {aboutGGTImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Second Section: Brigit Image and About Brigit Text Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-auto max-w-md md:max-w-lg mb-8 lg:mb-0">
              <Image
                src="/brigit.png"
                alt="Brigit Jacoby"
                layout="intrinsic"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutBrigitIntro}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutBrigitEducation}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  {aboutBrigitExperience}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                  {aboutBrigitPersonal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
