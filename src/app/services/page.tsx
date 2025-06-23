import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Services</h1>
          </div>

          {/* "What to Expect" Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              What to Expect
            </h2>

            {/* Image Section - Full Width with Responsive Support */}
            <div className="relative w-full mb-12">
              {/* Desktop Image */}
              <div className="relative w-full h-[400px] hidden sm:block">
                <Image
                  src="/expectations.png"
                  alt="Expectations"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>

              {/* Mobile Image with Zoom-Out Effect */}
              <div className="relative w-full h-[600px] sm:hidden">
                <Image
                  src="/expectations_vertical.png"
                  alt="Expectations Mobile"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>

          {/* Psychotherapy Approaches Text Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
              Brigit Jacoby utilizes many forms of Psychotherapy Evidence-Based
              Practices in order to tailor treatment plans specific to each and
              every child and/or family’s needs. In addition to home visits,
              virtual services are available throughout California.
            </p>
            <p className="text-lg text-gray-700 font-bold mb-2">
              Some of these approaches include:
            </p>
            {/* Unordered List */}
            <ul className="text-lg text-gray-700 space-y-2 mb-6">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Play-based Therapy</li>
              <li>Acceptance and Commitment Therapy</li>
              <li>Interpersonal Psychotherapy</li>
              <li>Humanistic Approach</li>
              <li>Social/Communication Skills</li>
            </ul>
            <blockquote className="mt-6 text-lg sm:text-2xl text-gray-900 italic font-semibold border-l-4 border-red-600 pl-4">
              “When there is a will, there is a way.” - George Herbert
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
