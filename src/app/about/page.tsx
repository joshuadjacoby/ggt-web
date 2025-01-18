"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const aboutGGTText = `Golden Gate Therapy was established in April 2024 to provide high quality psychotherapy services to children and their families. Founder of Golden Gate Therapy, Brigit Jacoby, aims to work diligently with your family’s particular needs.
Educators including Teachers, Tutors and Therapists are some of the first non-family members to interact with your child. In early stages of life - safety, belonging and confidence are beginning to form in the child’s brain. Interpersonal relationships (both family and non-family) are crucial for early development such as social skills including trust, respect and boundaries.
For young people, every relationship is significant and important. This is where Golden Gate Therapy enters.
`;
const aboutBrigitText = `Brigit Jacoby is a Licensed Clinical Social Worker living and working in the San Francisco Bay Area.
Brigit received her Masters of Social Work from University of Southern California and graduated from University of California, Irvine with a B.A. in Psychology and Social Behavior.
While obtaining an undergraduate and graduate degree, Brigit spent a lot of her time working with children as young as 2.5 years old to young adults in their 20s and their families which inspired the creation of Golden Gate Therapy.
In her personal time, Brigit enjoys spending time with her dog Marshall by walking to parks and exploring San Francisco with her husband.
`;

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>
          </div>
          {/* Image Section - Centered at the top */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md md:max-w-lg h-96 md:h-[500px]">
              <Image
                src="/brigit.png"
                alt="About Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Sections */}
          <div className="space-y-12">
            {/* Golden Gate Therapy Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutGGTText}
              </p>
            </div>
            {/* Brigit Jacoby Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutBrigitText}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
