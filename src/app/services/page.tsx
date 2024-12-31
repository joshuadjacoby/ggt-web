import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>Individual Therapy</li>
          <li>Couples Counseling</li>
          <li>Stress Management</li>
          <li>And more...</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
