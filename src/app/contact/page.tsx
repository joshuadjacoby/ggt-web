import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
      <Footer />
    </>
  );
}
