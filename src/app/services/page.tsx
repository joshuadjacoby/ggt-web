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

            {/* Image Section - Full Width */}
            <div className="relative w-full h-80 md:h-[400px] mb-12">
              <Image
                src="/expectations.png"
                alt="Expectations"
                layout="intrinsic"
                width={1200} // Adjust width to match your image dimensions
                height={400} // Adjust height as needed
              />
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
              <li>Positive Psychology</li>
              <li>Interpersonal Psychotherapy</li>
              <li>Humanistic Approach</li>
              <li>Social/Communication Skills</li>
            </ul>
            <blockquote className="mt-6 text-lg sm:text-2xl text-gray-900 italic font-semibold border-l-4 border-red-600 pl-4">
              “When there is a will, there is a way.” - George Herbert
            </blockquote>
          </div>

          {/* Initial Consultation and Service Pricing Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
              <span className="font-bold">Initial Consultation Call</span> - 15
              min, <span className="font-bold text-green-500">$0</span>
            </p>
            <p className="font-bold text-lg text-gray-700 mb-4">Purpose:</p>
            {/* Purpose List */}
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>To determine right fit, or if a referral is needed</li>
              <li>Retrieve contact info</li>
              <li>
                To schedule first home visit, parent visit and dependent-only
                visit
              </li>
            </ul>
            <p className="font-bold text-lg text-gray-700 mb-4">
              Recommended timeline:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700">
                <span className="font-bold">First Home Visit</span> - 75 min,{" "}
                <span className="font-bold text-green-500">$450</span>
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">
                  Parent Visit (Virtual or In-Person)
                </span>{" "}
                - 50 min, <span className="font-bold text-green-500">$250</span>
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold">
                  Dependent Visit (Virtual or In-Person)
                </span>{" "}
                - 50 min, <span className="font-bold text-green-500">$250</span>
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              In the first 1-3 sessions, parents can expect a thorough
              assessment and a customized treatment plan in order to begin
              making progress towards established goals.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Regular Follow-up Visits</span>{" "}
              (Virtual or In-person) - 50 min,{" "}
              <span className="font-bold text-green-500">$250</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
