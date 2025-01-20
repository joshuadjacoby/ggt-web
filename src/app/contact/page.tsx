"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("All fields are required! Please fill out all fields.");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_tldiyls",
        "template_qzfrvvp",
        { to_name: "Brigit", ...formData },
        "ESJuALi_woGqpuAJe",
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        toast.error("Message not sent. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send the message, please try again later.");
    }
  };

  return (
    <>
      {/* Toast Container for displaying toast notifications */}
      <ToastContainer />

      <Navbar />
      <div
        className="bg-gray-100"
        style={{
          minHeight: "85vh",
          background: "linear-gradient(to bottom, #E6E6E6, #F5F5F5)",
        }}
      >
        <div className="container mx-auto py-20 flex flex-col md:flex-row justify-center items-center">
          {/* Left Section - Contact Info */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              You can reach us via email or phone:
            </p>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:goldengatetherapist@gmail.com"
                className="text-blue-600"
              >
                goldengatetherapist@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> (415) 439-0499
            </p>

            {/* Add Image Below Contact Info using Next.js Image component */}
            <div className="mt-6">
              <Image
                src="/contact.png"
                alt="Contact"
                width={500} // Specify width
                height={300} // Specify height
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8"
            >
              {/* First Name and Last Name */}
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                  <label
                    htmlFor="first_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-2">
                  <label
                    htmlFor="last_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a brief message"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Emergency Disclosure */}
        <div className="w-full bg-gray-200 py-4 text-center text-gray-700">
          <p className="text-sm">
            While I am fast to respond, this is not meant to serve as an
            emergency contact. If you are experiencing an emergency, please call
            911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
