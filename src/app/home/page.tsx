import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Golden Gate Therapy
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Helping you achieve balance and well-being.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <Footer />
    </>
  );
}
