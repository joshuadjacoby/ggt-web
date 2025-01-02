import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Reach out to us at{" "}
            <a
              href="mailto:goldengatetherapist@gmail.com"
              className="text-blue-600"
            >
              goldengatetherapist@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
