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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative w-full max-w-md md:max-w-lg h-96 md:h-[500px]">
              <Image
                src="/brigit.png"
                alt="Services Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                Brigit Jacoby utilizes many forms of Psychotherapy
                Evidence-Based Practices in order to tailor treatment plans
                specific to each and every child and/or family’s needs. In
                addition to home visits, virtual services are available
                throughout California.
              </p>
              <p className="text-lg text-gray-700 font-bold mb-2 text-center">
                Some of these approaches include:
              </p>
              <ul className="text-lg text-gray-700 space-y-2 text-center">
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Play-based Therapy</li>
                <li>Positive Psychology</li>
                <li>Interpersonal Psychotherapy</li>
                <li>Humanistic Approach</li>
                <li>Social/Communication Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
